import React from 'react';
// import { useParams } from 'react-router-dom';
import '../styles/ParticipantDashboard.css';

const ParticipantDashboard = () => {
  // const { role } = useParams();

  return (
    <div className="dashboard">
      <h1>Welcome to Your Dashboard!</h1>
      <div className="dashboard-content">
        <div className="insight-block">
          <h3>Number of Events Signed Up For:</h3>
          <p>{/* Fetch from state or API */}</p>
        </div>
        <div className="insight-block">
          <h3>Upcoming Events:</h3>
          <p>{/* Fetch from state or API */}</p>
        </div>
        <div className="insight-block">
          <h3>Notifications:</h3>
          <p>{/* Fetch from state or API */}</p>
        </div>
      </div>
    </div>
  );
};

export default ParticipantDashboard;
