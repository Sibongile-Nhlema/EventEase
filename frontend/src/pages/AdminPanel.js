import React from 'react';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import '../styles/AdminPanel.css';

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default AdminPanel;
