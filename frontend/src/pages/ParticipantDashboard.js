import React from 'react';
import '../styles/ParticipantDashboard.css';

const ParticipantDashboard = () => {
  // Hard-coded data for the dashboard
  const eventsSignedUpFor = 3;
  const upcomingEvents = [
    'Autumn Workshop - September 10, 2024',
    'Insightful Evening - October 5, 2024',
    'Winter Gathering - November 20, 2024'
  ];
  const notifications = [
    'Reminder: Autumn Workshop starts in 2 days!',
    'New event added: Creative Conference',
    'Feedback request for Insightful Evening'
  ];

  return (
    <div className="dashboard">
      <h1>Welcome to Your Dashboard!</h1>
      <div className="dashboard-content">
        {/* Number of Events Signed Up For */}
        <div className="insight-block">
          <h3>Number of Events Signed Up For:</h3>
          <p>{eventsSignedUpFor}</p>
        </div>

        {/* Upcoming Events */}
        <div className="insight-block">
          <h3>Upcoming Events:</h3>
          <ul>
            {upcomingEvents.map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
        </div>

        {/* Notifications */}
        <div className="insight-block">
          <h3>Notifications:</h3>
          <ul>
            {notifications.map((notification, index) => (
              <li key={index}>{notification}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ParticipantDashboard;

