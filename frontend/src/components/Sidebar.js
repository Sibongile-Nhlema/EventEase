import React from 'react';
import '../styles/Sidebar.css';
import logo from '../assets/logo.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="EventEase Logo" className="logo" />
        <h2>EventEase</h2>
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
  );
};

export default Sidebar;
