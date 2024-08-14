import React from 'react';
import Sidebar from '../components/Sidebar';
import AdminHeader from '../components/AdminHeader';
import '../styles/AdminPanel.css';

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <AdminHeader />
      <Sidebar />
    </div>
  );
};

export default AdminPanel;
