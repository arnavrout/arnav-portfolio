import React from 'react';
import "../styles/Experience.css";
import { FaBuilding, FaCheckCircle } from 'react-icons/fa';

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 data-aos="fade-up">Experience</h2>

      <div className="experience-container">
        <div className="experience-card" data-aos="fade-up">
          <div className="experience-header" data-aos="fade-right">
            <div className="experience-company">
              <FaBuilding className="experience-icon" />
              <h3>telSpiel Communications</h3>
            </div>
            <span className="experience-duration">Nov 2023 - Present</span>
          </div>
          <h4>Software Engineer</h4>
          <p className="experience-summary" data-aos="fade-left">
            Building responsive web apps with optimized performance. Improved user experience for in-house web
            applications, leading to increased customer engagement. Collaborative team player with agile experience.
          </p>
          <p><strong>Accomplishments:</strong></p>
          <ul className="experience-accomplishments" data-aos="fade-up">
            <li><FaCheckCircle /> Successfully developed manager service portal to track sales team clients, enhancing functionality and user experience, leading to improved sales tracking and client management efficiency.</li>
            <li><FaCheckCircle /> Contributing to the development and maintenance for ensuring consistency across all applications.</li>
          </ul>
        </div>

        <div className="experience-card" data-aos="fade-up">
          <div className="experience-header" data-aos="fade-right">
            <div className="experience-company">
              <FaBuilding className="experience-icon" />
              <h3>Think Future Technologies</h3>
            </div>
            <span className="experience-duration">Feb 2022 - Oct 2023</span>
          </div>
          <h4>Software Developer</h4>
          <p className="experience-summary" data-aos="fade-left">
            Worked as a frontend developer with a passion for creating efficient and intuitive web applications.
            Gained solid understanding of JavaScript, HTML, and CSS, and extensive experience with React.js.
          </p>
          <p><strong>Accomplishments:</strong></p>
          <ul className="experience-accomplishments" data-aos="fade-up">
            <li><FaCheckCircle /> Developed and implemented responsive user interfaces for company’s web applications.</li>
            <li><FaCheckCircle /> Successfully integrated third-party APIs and libraries to enhance functionality.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
