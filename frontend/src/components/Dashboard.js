import React, { useState } from 'react';
import '../styles/Dashboard.css';
import AdminHeader from '../components/AdminHeader';
import Sidebar from '../components/Sidebar'; 

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className={`dashboard ${darkMode ? 'dark-mode' : ''}`}>
      <Sidebar /> {/* Render the sidebar */}
      <div className="dashboard-content">
        <AdminHeader onToggleDarkMode={toggleDarkMode} />
        <div className="dashboard-main">

          <div className="dashboard-grid">
            {/* Number of Events and Participants */}
            <div className="dashboard-item">
              <h2>Number of Events & Participants</h2>
              <div className="chart-placeholder">[Chart Placeholder]</div>
            </div>

            {/* Sign-Ups & Registrations */}
            <div className="dashboard-item">
              <h2>Sign-Ups & Registrations</h2>
              <div className="chart-placeholder">[Chart Placeholder]</div>
            </div>

            {/* Reminders, Updates, and Confirmations */}
            <div className="dashboard-item">
              <h2>Reminders, Updates & Confirmations Sent</h2>
              <div className="chart-placeholder">[Chart Placeholder]</div>
            </div>

            {/* Event Attendance and Deregistration */}
            <div className="dashboard-item">
              <h2>Event Attendance & Deregistration</h2>
              <div className="chart-placeholder">[Chart Placeholder]</div>
            </div>

            {/* Upcoming Events */}
            <div className="dashboard-item">
              <h2>Upcoming Events</h2>
              <div className="chart-placeholder">[Chart Placeholder]</div>
            </div>

            {/* Past Events Summary */}
            <div className="dashboard-item">
              <h2>Past Events Summary</h2>
              <div className="chart-placeholder">[Chart Placeholder]</div>
            </div>

            {/* Financial Insights */}
            <div className="dashboard-item">
              <h2>Financial Insights</h2>
              <div className="chart-placeholder">[Chart Placeholder]</div>
            </div>

            {/* Participant Feedback */}
            <div className="dashboard-item">
              <h2>Participant Feedback</h2>
              <div className="chart-placeholder">[Chart Placeholder]</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
