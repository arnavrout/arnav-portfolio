import React from 'react';
import "../styles/Projects.css";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 data-aos="fade-up">Projects</h2>
      <div className="projects-container">
        <div className="project-card" data-aos="fade-right">
          <div className="project-details" data-aos="fade-left">
            <h3>Weather Check App</h3>
            <p data-aos="fade-top">This is a React application that provides real-time weather updates, including temperature, humidity, wind speed, sunrise, sunset, and other weather information for any location searched. It includes a feature to save favorite locations for easy access.</p>
            <div className="project-links">
              <a href="https://github.com/arnavrout/weather-react-app/" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Github
              </a>
              <a href="https://arnavrout.github.io/weather-react-app/" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Project Link
              </a>
            </div>
          </div>
        </div>

        <div className="project-card" data-aos="fade-left">
          <div className="project-details" data-aos="fade-right">
            <h3>Speech Notes App</h3>
            <p data-aos="fade-top">A responsive application that converts spoken language into written text using speech recognition technology, enabling users to transcribe audio content with ease. It supports exporting notes in various formats for easy sharing and saving.</p>
            <div className="project-links">
              <a href="https://github.com/arnavrout/speech-notes-app" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Github
              </a>
              <a href="https://arnavrout.github.io/speech-notes-app/" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Project Link
              </a>
            </div>
          </div>
        </div>

        {/* Add more projects as needed */}
      </div>
    </section>
  );
}

export default Projects;
