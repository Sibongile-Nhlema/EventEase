import React from 'react';
import { useParams } from 'react-router-dom';

const DashboardOther = () => {
  const { role } = useParams();

  return (
    <div className="dashboard">
      <h1>Welcome to Your Dashboard!</h1>
      {role === 'organizer' ? (
        <div>
          <h2>Your Organizer Dashboard</h2>
          <p>Number of Events: {/* Fetch from state or API */}</p>
          <p>Number of Participants: {/* Fetch from state or API */}</p>
          <p>Attendance Rate: {/* Fetch from state or API */}</p>
          <p>Deregister Rate: {/* Fetch from state or API */}</p>
        </div>
      ) : (
        <div>
          <h2>Your Participant Dashboard</h2>
          <p>Number of Events Signed Up For: {/* Fetch from state or API */}</p>
          <p>Upcoming Events: {/* Fetch from state or API */}</p>
          <p>Notifications: {/* Fetch from state or API */}</p>
        </div>
      )}
    </div>
  );
};

export default DashboardOther;
