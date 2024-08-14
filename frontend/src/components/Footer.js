import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="home-footer">
      <p className="footer-text">
        &copy; 2024 EventEase. All rights reserved.
      </p>
      <div className="footer-social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
