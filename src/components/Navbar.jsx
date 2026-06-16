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
        <li>Home</li>
        <li>About</li>
        <li>News</li>
        <li>Events</li>
        <li>Community</li>
        <li>Gallery</li>
        <li>Contact</li>
        <li>Login</li>
      </ul>

      <button className="join-btn">Join Us</button>
    </nav>
  );
}

export default Navbar;