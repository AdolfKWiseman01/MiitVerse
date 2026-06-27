import { Link } from "react-router-dom";

function Navbar() {
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
        <li><Link to="/about">About</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>

      <button className="join-btn">Join Us</button>
    </nav>
  );
}

export default Navbar;