<<<<<<< HEAD
import { Link } from 'react-router-dom'

import { useAuth } from '../context/AuthContext'
=======
import { Link } from "react-router-dom";
>>>>>>> b5813276f7f8df0134dacdef8317035f71c5afb0

function Navbar() {
  const { user, logout } = useAuth()

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/miitLogo.png" alt="MIIT Logo" />

        <div className="logo-text">
          <h2>
            Miit<span>Verse</span>
          </h2>

          <p>Official Social Hub of MIIT</p>
        </div>
      </div>

      <ul>
        <li><Link to="/">Home</Link></li>
<<<<<<< HEAD
        <li><Link to="/feed">Feed</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/admin-login">Admin Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        {user?.role === 'admin' && <li><Link to="/admin">Admin</Link></li>}
=======
        <li><Link to="/about">About</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
>>>>>>> b5813276f7f8df0134dacdef8317035f71c5afb0
      </ul>

      {user ? (
        <button className="join-btn" onClick={logout}>Logout</button>
      ) : (
        <Link className="join-btn" to="/register">Join Us</Link>
      )}
    </nav>
  );
}

export default Navbar;