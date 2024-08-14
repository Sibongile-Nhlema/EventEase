import React, { useState } from 'react';
import '../styles/Sidebar.css';
import logo from '../assets/logo.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <img src={logo} alt="EventEase Logo" className="logo" onClick={toggleSidebar} />
          <h2 onClick={toggleSidebar}>EventEase</h2>
          {/* Mobile menu button */}
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/participants">Participants</a></li>
          <li><a href="/notifications">Notifications</a></li>
          <li><a href="/settings">Settings</a></li>
          <li><a href="/signout">Sign Out</a></li>
        </ul>
      </div>
      {/* Button to open sidebar on mobile */}
      {!isOpen && (
        <button className="sidebar-open-btn" onClick={toggleSidebar}>
          ☰
        </button>
      )}
    </>
  );
};

export default Sidebar;
