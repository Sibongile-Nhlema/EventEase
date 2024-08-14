import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import AdminHeader from '../components/AdminHeader';
import '../styles/AdminPanel.css';

const AdminPanel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="admin-panel">
      <AdminHeader onToggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
    </div>
  );
};

export default AdminPanel;
