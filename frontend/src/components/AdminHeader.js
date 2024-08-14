import React from 'react';
import '../styles/AdminHeader.css';

const AdminHeader = ({ onToggleDarkMode, onToggleSidebar }) => {
  const userName = "John Doe";

  return (
    <div className="admin-header">
      <div className="header-content">
        <button className="menu-toggle" onClick={onToggleSidebar}>
          ☰
        </button>
        <h1>Welcome, {userName}</h1>
        <button className="dark-mode-toggle" onClick={onToggleDarkMode}>
          Toggle Dark/Light Mode
        </button>
      </div>
    </div>
  );
};

export default AdminHeader;

