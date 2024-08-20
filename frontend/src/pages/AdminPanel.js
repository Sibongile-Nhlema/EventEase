import React, { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom'; // Import Outlet
import Sidebar from '../components/Sidebar';
import AdminHeader from '../components/AdminHeader';
import Dashboard from '../pages/Dashboard';
import Events from '../pages/Events';
import Participants from '../pages/Participants';
import Notifications from '../pages/Notifications';
import Settings from '../pages/Settings';
import SignupLogin from '../pages/SignupLogin'; // Import SignupLogin
import '../styles/AdminPanel.css';

const AdminPanel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="admin-panel">
      <AdminHeader />
      <Sidebar isOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
      <div className="admin-content">
        <Routes>
          {/* Route for SignupLogin, which should not be nested */}
          <Route path="/signup-login/:role" element={<SignupLogin />} />
          {/* Nested routes */}
          <Route path="/*" element={<Outlet />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="events" element={<Events />} />
            <Route path="participants" element={<Participants />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default AdminPanel;
