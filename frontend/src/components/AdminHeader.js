import React from 'react';
import '../styles/AdminHeader.css';

const AdminHeader = ({ onToggleDarkMode, onToggleSidebar }) => {

  return (
    <div className="admin-header">
      <div className="header-content">
        <h1>Welcome</h1>
      </div>
    </div>
  );
};

export default AdminHeader;
