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
}