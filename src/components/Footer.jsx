import './Footer.css';

/**
 * Footer Component
 * Displays footer information and contact details
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Rcc Youth Ministry</h3>
            <p className="footer-description">
              Building a community of young believers seeking God&apos;s purpose in Asylum Down.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Location</h4>
            <p className="footer-text">
              <span aria-label="Location">📍</span> Asylum Down<br />
              Accra, Ghana
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <p className="footer-text">
              <span aria-label="Email">✉️</span> info@rccyouth.org<br />
              <span aria-label="Phone">📞</span> +233 XX XXX XXXX
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Connect With Us</h4>
            <div className="social-links">
              <a 
                href="#" 
                className="social-link" 
                aria-label="Facebook"
                title="Follow us on Facebook"
              >
                📘
              </a>
              <a 
                href="#" 
                className="social-link" 
                aria-label="Instagram"
                title="Follow us on Instagram"
              >
                📷
              </a>
              <a 
                href="#" 
                className="social-link" 
                aria-label="Twitter"
                title="Follow us on Twitter"
              >
                🐦
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Rcc Youth Ministry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
