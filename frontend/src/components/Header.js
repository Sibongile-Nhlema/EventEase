import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header">
        <img src={logo} alt="EventEase Logo" className="logo" />
        <h2>EventEase</h2>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contactUs">Contact Us</Link>
        <Link to="/about">About Us</Link>
      </nav>
    </header>
  );
};

export default Header;

