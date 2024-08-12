import React from 'react';
import '../styles/HomePage.css';
import registrationVideo from '../videos/registration.mp4';
import analyticsVideo from '../videos/analytics.mp4';
import communicationVideo from '../videos/communication.mp4';

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
          <div className="video-container">
            <video autoPlay loop muted>
              <source src={registrationVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p>Streamline your event registration process with automation.</p>
        </div>
        <div className="feature">
          <h2>Real-Time Analytics</h2>
          <div className="video-container">
            <video autoPlay loop muted>
              <source src={analyticsVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p>Access detailed data and insights in real-time.</p>
        </div>
        <div className="feature">
          <h2>Automated Communication</h2>
          <div className="video-container">
            <video autoPlay loop muted>
              <source src={communicationVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p>Keep participants informed with automated updates.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
