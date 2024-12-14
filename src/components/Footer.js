import React from 'react';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Arnav Rout. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://instagram.com/arnavrout.14" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="footer-icon" />
            Instagram
          </a>
          <a href="mailto:arnav10rout@gmail.com" aria-label="Email">
            <FaEnvelope className="footer-icon" />
            Email Me
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
