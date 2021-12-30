import React from "react";
import resume from "../../assets/resume/Chris_Bradford_Resume.PDF";
function Resume() {
  return (
    <section>
      <br />
      <div className="download">
        <a href={resume} download="Chris_Bradford_Resume.PDF">
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
