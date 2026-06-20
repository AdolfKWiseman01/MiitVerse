<<<<<<< HEAD
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from '../context/AuthContext'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setLoading(true)

    try {
      const user = await login(form)

      navigate(user.role === 'admin' ? '/admin' : '/feed')
    } catch (err) {
      setError(err.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <p>Use your account to access MiitVerse.</p>

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
          {loading ? 'Signing in...' : 'Login'}
        </button>

        <p>
          Need an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  )
=======
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="auth-page">
      <div className="auth-hero">
        <span className="eyebrow">Welcome Back</span>

        <h1>Login to MiitVerse</h1>

        <p className="auth-subtitle">
          Stay connected with the MIIT community,
          events, updates and discussions.
        </p>

        <Link
          to="/register"
          className="outline-btn auth-hero-link"
        >
          Create Account
        </Link>
      </div>

      <div className="auth-card">
        <div className="auth-card-header">
          <div>
            <span className="eyebrow">Sign In</span>
            <h2>Welcome back</h2>
          </div>
        </div>

        <form
          className="auth-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <label>
            Email Address
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
            Login
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account?{" "}
          <Link to="/register">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
>>>>>>> b5813276f7f8df0134dacdef8317035f71c5afb0
}