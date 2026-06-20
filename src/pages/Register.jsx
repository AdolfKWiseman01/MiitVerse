<<<<<<< HEAD
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from '../context/AuthContext'

export default function Register() {
  const navigate = useNavigate()
  const { register } = useAuth()
  const [form, setForm] = useState({ username: '', email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setLoading(true)

    try {
      await register(form)
      navigate('/login')
    } catch (err) {
      setError(err.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>Create account</h1>
        <p>Join MiitVerse as a user account.</p>

        <label>
          Username
          <input
            value={form.username}
            onChange={(event) => setForm({ ...form, username: event.target.value })}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={form.password}
            onChange={(event) => setForm({ ...form, password: event.target.value })}
            required
          />
        </label>

        {error && <p className="auth-error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Register'}
        </button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  )
=======
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="auth-page auth-register">
      <div className="auth-hero">
        <span className="eyebrow">Join MiitVerse</span>
        <h1>Sign up for free</h1>

        <p className="auth-subtitle">
          Create your account to discover community stories,
          events, and MIIT updates.
        </p>

        <Link
          to="/login"
          className="outline-btn auth-hero-link"
        >
          Already have an account?
        </Link>
      </div>

      <div className="auth-card">
        <div className="auth-card-header">
          <div>
            <span className="eyebrow">Create account</span>
            <h2>Get started</h2>
          </div>

          <span className="auth-card-note">
            Join the MIIT community today
          </span>
        </div>

        <form
          className="auth-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <label>
            Full name
            <input
              type="text"
              placeholder="Your full name"
            />
          </label>

          <label>
            Email address
            <input
              type="email"
              placeholder="name@miit.edu.mm"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              placeholder="••••••••"
            />
          </label>

          <button
            type="submit"
            className="gold-btn auth-submit"
          >
            Create account
          </button>
        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
>>>>>>> b5813276f7f8df0134dacdef8317035f71c5afb0
}