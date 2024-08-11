import React from 'react';
import '../styles/AdminHeader.css';

const AdminHeader = ({ onToggleDarkMode }) => {
  // Replace with actual user's name or pass it as a prop
  const userName = "John Doe";

  return (
    <div className="admin-header">
      <div className="header-content">
        <h1>Welcome, {userName}</h1>
        <button className="dark-mode-toggle" onClick={onToggleDarkMode}>
          Toggle Dark/Light Mode
        </button>
      </div>
    </div>
  );
};

export default AdminHeader;
