import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Sidebar.css';
import logo from '../assets/logo.png';

const Sidebar = ({ isOpen, onToggleSidebar }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('userToken'); // or whatever we will use for  authentication
    navigate('/');
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <img src={logo} alt="EventEase Logo" className="logo" onClick={onToggleSidebar} />
          <h2>EventEase</h2>
        </div>
        <ul>
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
          <li><Link to="/admin/events">Events</Link></li>
          <li><Link to="/admin/participants">Participants</Link></li>
          <li><Link to="/admin/notifications">Notifications</Link></li>
          <li><Link to="/admin/settings">Settings</Link></li>
          <li><button onClick={handleSignOut} className="signout-button">Sign Out</button></li>
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

export default Sidebar;
