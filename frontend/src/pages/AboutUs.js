import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
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
        <p>
          We are a team of passionate professionals committed to bringing the
          best tools and services to the event management industry.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
