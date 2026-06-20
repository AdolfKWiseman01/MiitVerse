import 'dotenv/config'

import app from './app.js'
import { closeNeo4j } from './config/neo4j.js'
import { ensureUserConstraints } from './config/neo4jInit.js'
import { env } from './config/env.js'

async function start() {
  await ensureUserConstraints()

  const server = app.listen(env.port, () => {
    console.log(`Server running on http://localhost:${env.port}`)
  })

  async function shutdown() {
    server.close(async () => {
      await closeNeo4j()
      process.exit(0)
    })
  }

  process.on('SIGINT', shutdown)
  process.on('SIGTERM', shutdown)
}

start().catch(async (error) => {
  console.error('Failed to start server:', error.message)
  await closeNeo4j()
  process.exit(1)
})