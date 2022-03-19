import React from "react";
import resume from "../../assets/resume/Resume_Chris_Bradford.PDF";
function Resume() {
  return (
    <section className="resume">
      <br />
      <div>
        <a className="download" href={resume} download="Resume_Chris_Bradford.PDF">
          Download My Resume
        </a>
      </div>
      <div className="profifs">
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
