import React from 'react';
import Header from '../components/Header'; // Adjust the path as needed
import '../styles/GetStarted.css';

const GetStarted = () => {
  return (
    <>
      <Header />
      <div className="get-started-page">
        <header className="get-started-header">
          <h1>Get Started with EventEase</h1>
          <p>Are you an organizer or a participant?</p>
          <div className="get-started-buttons">
            <a href="/admin" className="cta-button">I am an Organizer</a>
            <a href="/signup?role=participant" className="cta-button">I am a Participant</a>
          </div>
        </header>
      </div>
    </>
  );
};

export default GetStarted;
