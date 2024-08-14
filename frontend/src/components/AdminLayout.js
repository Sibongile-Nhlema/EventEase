import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/AdminLayout.css';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
