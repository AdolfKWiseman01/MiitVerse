import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { randomUUID } from 'node:crypto'

import { driver } from '../config/neo4j.js'
import { env } from '../config/env.js'

function getUserProperties(node) {
  return node?.properties ?? node ?? {}
}

function serializeUser(record) {
  const user = getUserProperties(record?.get('user'))

  if (!user) {
    return null
  }

  return {
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
  }
}

export async function registerUser(req, res) {
  const { username, email, password } = req.body || {}

  if (!username || !email || !password) {
    return res.status(400).json({
      message: 'username, email, and password are required',
    })
  }

  const session = driver.session()

  try {
    const existing = await session.executeRead((tx) =>
      tx.run(
        `
          MATCH (user:User)
          WHERE user.email = $email OR user.username = $username
          RETURN user
          LIMIT 1
        `,
        { email, username }
      )
    )

    if (existing.records.length > 0) {
      return res.status(409).json({ message: 'User already exists' })
    }

    const passwordHash = await bcrypt.hash(password, 10)
    const userId = randomUUID()
    const createdAt = new Date().toISOString()

    const result = await session.executeWrite((tx) =>
      tx.run(
        `
          CREATE (user:User {
            id: $id,
            username: $username,
            email: $email,
            passwordHash: $passwordHash,
            role: 'user',
            createdAt: $createdAt
          })
          RETURN user
        `,
        {
          id: userId,
          username,
          email,
          passwordHash,
          createdAt,
        }
      )
    )

    return res.status(201).json({
      message: 'User registered successfully',
      user: serializeUser(result.records[0]),
    })
  } catch {
    return res.status(500).json({ message: 'Registration failed' })
  } finally {
    await session.close()
  }
}

export async function loginUser(req, res) {
  const { email, password } = req.body || {}

  if (!email || !password) {
    return res.status(400).json({ message: 'email and password are required' })
  }

  const session = driver.session()

  try {
    const result = await session.executeRead((tx) =>
      tx.run(
        `
          MATCH (user:User { email: $email })
          RETURN user
          LIMIT 1
        `,
        { email }
      )
    )

    if (result.records.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const user = getUserProperties(result.records[0].get('user'))
    const passwordMatches = await bcrypt.compare(password, user.passwordHash)

    if (!passwordMatches) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      env.jwtSecret,
      { expiresIn: '7d' }
    )

    return res.json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    })
  } catch {
    return res.status(500).json({ message: 'Login failed' })
  } finally {
    await session.close()
  }
}