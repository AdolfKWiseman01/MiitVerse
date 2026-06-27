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
}