import React from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to EventEase</h1>
        <p>Your ultimate tool for seamless event management.</p>
        <a href="/events" className="cta-button">Get Started</a>
      </header>
      <section className="home-features">
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
    </div>
  );
};

export default HomePage;

