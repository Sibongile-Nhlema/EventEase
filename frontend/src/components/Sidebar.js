import React, { useState } from 'react';
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
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/participants">Participants</a></li>
          <li><a href="/notifications">Notifications</a></li>
          <li><a href="/settings">Settings</a></li>
          <li><a href="/signout">Sign Out</a></li>
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
