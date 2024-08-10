import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>EventEase</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contactUs">Contact Us</Link>
        <Link to="/about">About Us</Link>
      </nav>
    </header>
  );
};

export default Header;

