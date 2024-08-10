import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>EventEase</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
}

export default Header;
