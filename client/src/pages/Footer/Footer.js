import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-title">About Us</h2>
          <p className="footer-text">
            We are a tech company dedicated to providing innovative solutions and services to help businesses succeed.
          </p>
        </div>
        <div className="footer-section links">
          <h2 className="footer-title">Quick Links</h2>
          <ul className="footer-list">
            <li className="footer-list-item"><a href="#home">Home</a></li>
            <li className="footer-list-item"><a href="#all-products">All Programs</a></li>
            <li className="footer-list-item"><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2 className="footer-title">Contact Us</h2>
          <p className="footer-text">Addis Ababa, Ethiopia</p>
          <p className="footer-text">Email: support@perspective.com</p>
          <p className="footer-text">Phone: +251 923 567 890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 perspective. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
