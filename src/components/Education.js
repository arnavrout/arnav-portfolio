import React from 'react'
import "../styles/Education.css"
import { FaUniversity, FaSchool } from 'react-icons/fa';

function Education() {
  return (
    <section className="education-section" id="education">
    <h2 data-aos="fade-up">Education</h2>
    <div className="education-container">
      <div className="education-card" data-aos="zoom-in">
        <div className="education-icon" data-aos="fade-up">
          <FaUniversity />
        </div>
        <div className="education-details" data-aos="fade-right">
          <h3>Jamia Hamdard University</h3>
          <p>Bachelor of Technology (B.Tech) • 2018-2022</p>
          <p>Computer Science Engineering</p>
          <p>CGPA: 7.7</p>
        </div>
      </div>
      <div className="education-card" data-aos="zoom-in">
        <div className="education-icon" data-aos="fade-up">
          <FaSchool />
        </div>
        <div className="education-details" data-aos="fade-right">
          <h3>DAV Public School, Sector 37 Faridabad</h3>
          <p>Senior Secondary (XII)</p>
          <p>Year of completion: 2018</p>
          <p>Science (Physics, Chemistry, Mathematics)</p>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Education
