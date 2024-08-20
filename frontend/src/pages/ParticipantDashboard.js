import React from 'react';
import { useParams } from 'react-router-dom';

const ParticipantDashboard = () => {
  const { role } = useParams();

  return (
    <div className="dashboard">
      <h1>Welcome to Your Dashboard!</h1>
        <div>
          <h2>Your Participant Dashboard</h2>
          <p>Number of Events Signed Up For: {/* Fetch from state or API */}</p>
          <p>Upcoming Events: {/* Fetch from state or API */}</p>
          <p>Notifications: {/* Fetch from state or API */}</p>
        </div>
    </div>
  );
};

export default ParticipantDashboard;
