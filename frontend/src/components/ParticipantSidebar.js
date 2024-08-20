import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';
import logo from '../assets/logo.png';

const ParticipantSidebar = ({ isOpen, onToggleSidebar }) => {
  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <img src={logo} alt="EventEase Logo" className="logo" onClick={onToggleSidebar} />
          <h2>EventEase</h2>
        </div>
        <ul>
          <li><Link to="/participant/dashboard">Dashboard</Link></li>
          <li><Link to="/participant/events">Events</Link></li>
          <li><Link to="/participant/notifications">Notifications</Link></li>
          <li><Link to="/participant/settings">Settings</Link></li>
          <li><Link to="/participant/signout">Sign Out</Link></li>
        </ul>
      </div>
      {!isOpen && (
        <button className="sidebar-open-btn" onClick={onToggleSidebar}>
          <img src={logo} alt="EventEase Logo" className="logo" />
        </button>
      )}
    </>
  );
};

export default ParticipantSidebar;