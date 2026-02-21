import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing">

      {/* NAVBAR */}
      <nav className="landing-nav">
        <div className="brand">SurakshaMitra</div>
        <div className="nav-links">
          <Link to="/login">Login</Link>
          <Link to="/signup" className="nav-cta">Get Started</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-section">
        <h1>
          AI Powered <span>Content Moderation</span>
        </h1>
        <p>
          Detect harmful, abusive, and unsafe content in real-time using
          advanced AI-driven risk intelligence.
        </p>

        <div className="hero-buttons">
          <Link to="/signup" className="primary-btn">
            Start Protecting
          </Link>
          <Link to="/login" className="secondary-btn">
            Login
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        <h2>Why SurakshaMitra?</h2>

        <div className="features-grid">
          <div className="feature">
            <h3>⚡ Real-Time Detection</h3>
            <p>Instant AI-based content analysis with smart classification.</p>
          </div>

          <div className="feature">
            <h3>📊 Risk Scoring</h3>
            <p>Dynamic risk scores with explainable decision outputs.</p>
          </div>

          <div className="feature">
            <h3>🌍 Multi-Lingual Support</h3>
            <p>Detect threats across multiple languages and formats.</p>
          </div>

          <div className="feature">
            <h3>🔐 Secure Architecture</h3>
            <p>Built with JWT authentication & protected API access.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section">
        <h2>How It Works</h2>

        <div className="steps">
          <div>1️⃣ Enter your content</div>
          <div>2️⃣ AI analyzes risk patterns</div>
          <div>3️⃣ Get Decision + Score + Explanation</div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Secure Your Platform Today</h2>
        <Link to="/signup" className="primary-btn">
          Get Started Now
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="landing-footer">
        © 2026 SurakshaMitra • AI Content Safety Platform
      </footer>

    </div>
  );
}

export default Landing;