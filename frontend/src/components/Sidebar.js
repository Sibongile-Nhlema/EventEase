import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';
import logo from '../assets/logo.png';

const Sidebar = ({ isOpen, onToggleSidebar }) => {
  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <img src={logo} alt="EventEase Logo" className="logo" onClick={onToggleSidebar} />
          <button className="close-btn" onClick={onToggleSidebar}>&times;</button>
        </div>
        <ul>
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
          <li><Link to="/admin/events">Events</Link></li>
          <li><Link to="/admin/participants">Participants</Link></li>
          <li><Link to="/admin/notifications">Notifications</Link></li>
          <li><Link to="/admin/settings">Settings</Link></li>
          <li><Link to="/admin/signout">Sign Out</Link></li>
        </ul>
      </div>
      {!isOpen && (
        <button className="sidebar-open-btn" onClick={onToggleSidebar}>
          ☰
        </button>
      )}
    </>
  );
};

export default Sidebar;

