import React from 'react';
import '../styles/GetStarted.css';

const GetStarted = () => {
  return (
    <div className="get-started-page">
      <header className="get-started-header">
        <h1>Get Started with EventEase</h1>
        <p>Are you an organizer or a participant?</p>
        <div className="get-started-buttons">
          <a href="/signup?role=organizer" className="cta-button">I am an Organizer</a>
          <a href="/signup?role=participant" className="cta-button">I am a Participant</a>
        </div>
      </header>
    </div>
  );
};

export default GetStarted;
