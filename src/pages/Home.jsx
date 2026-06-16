import Navbar from "../components/Navbar";
import "../App.css";

function Home() {
  return (
    <div className="home">

      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            Miit<span>Verse</span>
          </h1>

          <h2>
            Connecting Minds.
            <br />
            Building Futures.
          </h2>

          <p>
            Your gateway to news, events, stories and achievements
            from the MIIT community.
          </p>

          <div className="hero-buttons">
            <button className="gold-btn">Explore More</button>
            <button className="outline-btn">Join Community</button>
          </div>
        </div>

        {/* <div className="hero-right">
          <img src="/globe.png" alt="globe" />
        </div> */}
      </section>

      {/* STATS */}
      <section className="stats">
        <div>1200+ Students</div>
        <div>80+ Events</div>
        <div>120+ News</div>
        <div>30+ Communities</div>
      </section>

    </div>
  );
}

export default Home;