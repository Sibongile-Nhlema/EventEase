import React from 'react';
import Header from '../components/Header';
import '../styles/GetStarted.css';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <>
      <Header />
      <div className="get-started-page">
        <header className="get-started-header">
          <h1>Get Started with EventEase</h1>
          <p>Are you an organizer or a participant?</p>
          <div className="get-started-buttons">
            <Link to="/signup-login/organizer" className="cta-button">I am an Organizer</Link>
            <Link to="/signup-login/participant" className="cta-button">I am a Participant</Link>
          </div>
        </header>
      </div>
    </>
  );
};

export default GetStarted;
