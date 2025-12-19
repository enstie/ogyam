import './Hero.css';

/**
 * Hero Component
 * Displays the welcome banner with church name, location, and background image
 */
function Hero() {
  return (
    <section className="hero" role="banner">
      <div className="hero-overlay">
        <div className="hero-content container fade-in">
          <h1 className="hero-title">
            Welcome to Rcc Youth Ministry
          </h1>
          <p className="hero-location">
            <span className="location-icon" aria-hidden="true">📍</span>
            Asylum Down
          </p>
          <p className="hero-description">
            Join us in fellowship, worship, and growing together in faith.
            Building a community of young believers seeking God&apos;s purpose.
          </p>
          <a href="#registration" className="hero-cta" aria-label="Register now">
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
