import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AdminHeader from '../components/AdminHeader';
import Dashboard from '../pages/Dashboard';
import Events from '../pages/Events';
import Participants from '../pages/Participants';
import Notifications from '../pages/Notifications';
import Settings from '../pages/Settings';
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
          <Route path="/"/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/events" element={<Events />} />
          <Route path="/participants" element={<Participants />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPanel;
