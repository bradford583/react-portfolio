import React from "react";
import "../../assets/resume/Chris_Bradford_Resume.PDF";
function Resume() {
  return (
    <section className="content">
      <br />
      <div className="download">
        <a href="resume.pdf" download="">
          Download My Resume
        </a>
      </div>
      <div>
        <h2>Proficiencies</h2>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;