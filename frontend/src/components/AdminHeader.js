import React from 'react';
import '../styles/AdminHeader.css';

const AdminHeader = ({ onToggleDarkMode, onToggleSidebar }) => {
  const userName = "John Doe";

  return (
    <div className="admin-header">
      <div className="header-content">
        <h1>Welcome, {userName}</h1>
      </div>
    </div>
  );
};

export default AdminHeader;

