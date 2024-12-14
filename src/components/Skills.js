import React from 'react'
import "../styles/Skills.css"


function Skills() {
  return (
    <section className="skills-section" id="skills">
    <h2 data-aos="fade-up">Skills</h2>
    <div className="skills-container">
      <div className="skill-card">
        <div className="skill-icon">@</div>
        <h3 data-aos="fade-left">HTML & CSS</h3>
        <p data-aos="fade-left">Build structured web pages with responsive and beautiful styling.</p>
      </div>
      <div className="skill-card">
        <div className="skill-icon">{`{ }`}</div>
        <h3 data-aos="fade-left">JavaScript</h3>
        <p data-aos="fade-left">Dynamic web functionality and client-side scripting with ES6+.</p>
      </div>
      <div className="skill-card">
        <div className="skill-icon">{`<React />`}</div>
        <h3 data-aos="fade-left">React.js & Redux</h3>
        <p data-aos="fade-left">Build fast, interactive UIs and manage complex app state effectively.</p>
      </div>
      <div className="skill-card">
        <div className="skill-icon">{`<TS />`}</div>
        <h3 data-aos="fade-left">TypeScript</h3>
        <p data-aos="fade-left">Typed JavaScript for safer, scalable code.</p>
      </div>
      <div className="skill-card">
        <div className="skill-icon">jQ</div>
        <h3 data-aos="fade-right">jQuery</h3>
        <p data-aos="fade-right">Efficient DOM manipulation and AJAX with simplicity.</p>
      </div>
      <div className="skill-card">
        <div className="skill-icon">{`{ API }`}</div>
        <h3 data-aos="fade-right">REST API</h3>
        <p data-aos="fade-right">Integration with RESTful services to enhance application functionality.</p>
      </div>
      <div className="skill-card">
        <div className="skill-icon">{`<ng>`}</div>
        <h3 data-aos="fade-right">Angular</h3>
        <p data-aos="fade-right">Develop scalable applications with this powerful frontend framework.</p>
      </div>
      <div className="skill-card">
        <div className="skill-icon">{`</>`}</div>
        <h3 data-aos="fade-right">Node.js & Express</h3>
        <p data-aos="fade-right">Backend development with server-side logic and RESTful APIs.</p>
      </div>
    </div>
  </section>
  )
}

export default Skills
