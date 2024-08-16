import React from 'react';
import Header from '../components/Header';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="about-us-page">
        <header className="about-header">
          <h1>About EventEase</h1>
          <p>
            EventEase is dedicated to simplifying event management for organizers
            and participants alike. Our platform offers automated registration,
            real-time analytics, and seamless communication tools to ensure
            your events run smoothly from start to finish.
          </p>
        </header>
        <section className="about-details">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide an all-in-one event management solution
            that saves time and enhances the event experience through innovative
            technology.
          </p>
          <h2>Our Team</h2>
          <div className="team-section">
            <div className="team-member">
              <img
                src="https://via.placeholder.com/150"
                alt="Brivan Karani"
                className="team-image"
              />
              <h3>Brivan Karani</h3>
              <p>Short description about Brivan Karani.</p>
              <div className="social-media-links">
                <a href="https://twitter.com/member1" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://linkedin.com/in/member1" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/member1" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
            <div className="team-member">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 2"
                className="team-image"
              />
              <h3>Team Member 2</h3>
              <p>Short description about Team Member 2.</p>
              <div className="social-media-links">
                <a href="https://twitter.com/member2" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://linkedin.com/in/member2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/member2" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
            <div className="team-member">
              <img
                src="https://via.placeholder.com/150"
                alt="Sibongile Nhlema"
                className="team-image"
              />
              <h3>Sibongile Nhlema</h3>
              <p>Short description about Sibongile Nhlema.</p>
              <div className="social-media-links">
                <a href="https://twitter.com/member3" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://linkedin.com/in/member3" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/member3" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
