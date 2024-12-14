import React from 'react';
import '../styles/Contact.css';
import { FaMobileAlt, FaEnvelope, FaLink } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact-section" id='contact'>
      <h2>Contact</h2>
      <div className="contact-container">
        <div className="contact-box">
          <FaMobileAlt className="contact-icon" />
          <div data-aos="fade-right">
            <span>Mobile:</span>
            <a href="tel:+8368398111" className="contact-link">8368398111</a>
          </div>
        </div>
        <div className="contact-box">
          <FaEnvelope className="contact-icon" />
          <div data-aos="fade-right">
            <span>Email:</span>
            <a href="mailto:arnav10rout@gmail.com" className="contact-link">arnav10rout@gmail.com</a>
          </div>
        </div>
        <div className="contact-box">
          <FaLink className="contact-icon" />
          <div data-aos="fade-left">
            <a href="https://github.com/arnavrout" target="_blank" rel="noopener noreferrer" className="contact-link">
              Github Profile
            </a>
          </div>
        </div>
        <div className="contact-box">
          <FaLink className="contact-icon" />
          <div data-aos="fade-left">
          <a href="https://www.linkedin.com/in/arnavrout/" target="_blank" rel="noopener noreferrer" className="contact-link">
            LinkedIn Profile
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;