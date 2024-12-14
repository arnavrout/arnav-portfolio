import React from 'react';
import '../styles/About.css';
import portfolioImage from "../images/portfolio.png";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="background-design"></div>
      <div className="about-container" data-aos="fade-up">
        <div className="about-image" data-aos="zoom-in">
          <img src={portfolioImage} alt="Your Name" />
        </div>
        <div className="about-content">
          <h2 data-aos="fade-up">About Me</h2>
          <div className="about-card">
            <p className="about-text" data-aos="fade-up" data-aos-delay="100">
              I am a passionate and dedicated software developer with expertise in building interactive and responsive user interfaces. 
              My work emphasizes a seamless user experience, and I am always keen on creating engaging web solutions.
            </p>
            <p className="about-text" data-aos="fade-up" data-aos-delay="200">
              I am proficient in <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, and have hands-on experience 
              with modern frameworks like <strong>React</strong> and <strong>Node.js</strong>. My passion for clean, maintainable code and 
              attention to detail helps me deliver high-quality solutions that align with industry standards.
            </p>
            <p className="about-text" data-aos="fade-up" data-aos-delay="300">
              I am committed to continuous learning, and I stay up-to-date with the latest industry trends to bring fresh ideas to every project.
            </p>
            <div className="skills-icons" data-aos="fade-up" data-aos-delay="400">
              <FaHtml5 className="skill-icon" title="HTML5" />
              <FaCss3Alt className="skill-icon" title="CSS3" />
              <FaJs className="skill-icon" title="JavaScript" />
              <FaReact className="skill-icon" title="React" />
              <FaNodeJs className="skill-icon" title="Node.js" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
