import React from 'react';
import '../styles/LandingPage.css';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Welcome to EventEase</h1>
        <p>Your ultimate tool for seamless event management.</p>
        <a href="/events" className="cta-button">Get Started</a>
      </header>
      <section className="landing-features">
        <div className="feature">
          <h2>Automated Registration</h2>
          <p>Streamline your event registration process with automation.</p>
        </div>
        <div className="feature">
          <h2>Real-Time Analytics</h2>
          <p>Access detailed data and insights in real-time.</p>
        </div>
        <div className="feature">
          <h2>Automated Communication</h2>
          <p>Keep participants informed with automated updates.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;