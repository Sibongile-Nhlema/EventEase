import React, { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import ParticipantSidebar from '../components/ParticipantSidebar';
import ParticipantHeader from '../components/ParticipantHeader';
import ParticipantDashboard from '../pages/ParticipantDashboard';
import ParticipantEvents from '../pages/ParticipantEvents';
import ParticipantsNotifications from '../pages/ParticipantsNotifications';
import Settings from '../pages/Settings';
import SignupLogin from '../pages/SignupLogin';
import '../styles/AdminPanel.css';

const ParticipantPanel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="admin-panel"> 
      <ParticipantHeader />
      <ParticipantSidebar isOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
      <div className="admin-content">
        <Routes>
          {/* Route for SignupLogin, which should not be nested */}
          <Route path="/signup-login/:role" element={<SignupLogin />} />
          {/* Nested routes */}
          <Route path="/*" element={<Outlet />}>
            <Route path="dashboard" element={<ParticipantDashboard />} />
            <Route path="events" element={<ParticipantEvents />} />
            <Route path="notifications" element={<ParticipantsNotifications />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default ParticipantPanel;
