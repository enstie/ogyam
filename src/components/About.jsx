import React from 'react';
import './About.css';

/**
 * About Component
 * Provides information about the Rcc Youth Ministry
 */
function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">About Our Ministry</h2>
        <p className="section-subtitle">
          Growing together in faith, fellowship, and purpose
        </p>
        
        <div className="about-content">
          <div className="about-card fade-in">
            <div className="about-icon">🙏</div>
            <h3>Our Mission</h3>
            <p>
              To empower young people to know Christ, grow in their faith, and serve 
              their community with love and compassion. We create a welcoming space 
              where everyone can explore their relationship with God.
            </p>
          </div>

          <div className="about-card fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="about-icon">👥</div>
            <h3>Our Community</h3>
            <p>
              A vibrant community of young believers who support each other through 
              life's journey. We meet regularly for worship, Bible study, and fellowship 
              activities that strengthen our bonds and deepen our faith.
            </p>
          </div>

          <div className="about-card fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="about-icon">✨</div>
            <h3>What We Do</h3>
            <p>
              From weekly worship services to community outreach programs, we engage 
              in activities that nurture spiritual growth and make a positive impact. 
              Join us for prayer meetings, youth conferences, and social events.
            </p>
          </div>
        </div>

        <div className="about-details">
          <h3>Join Us Every Week</h3>
          <p>
            We gather every Sunday for inspiring worship services filled with contemporary 
            music, relevant messages, and authentic fellowship. Our doors are always open 
            to anyone seeking to grow in their faith and connect with like-minded youth.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
