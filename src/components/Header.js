import React, { useState, useEffect }  from 'react'
import '../styles/Header.css'
import portfolioImage from "../images/portfolio.png"
import { FaMoon, FaSun } from 'react-icons/fa';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle the theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply the theme on initial render and when the theme changes
  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);
  
  return (
    <header className="header">
      <div className="profile">
        <img src={portfolioImage} alt="Your Name" className="profile-photo" />
        <h1>Arnav Rout</h1>
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

  )
}

export default Header
