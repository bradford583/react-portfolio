import React from "react";

function About() {
  return (
    <section className="content">
      <div id="about">
        <img
          src={require(`../../assets/pictures/Profile-Pic(2).jpg`).default}
          alt="Bio-picture"
          className="aboutMe-img"
        />
        <div className="aboutMeText">
          <h1>About Me</h1>
          <p>
            I am a graduate student of the University of Utah's Full Stack Web Development bootcamp. Currently I am a General Manager in the quick service restaurant industy for the last 14 years at the same company. I started as a regular daytime lunch worker and with ambition I moved up the chain quickly and was a GM in the first 4 years of working there. I am now looking to change careers to continue to grow and be able to provide for my family. Givin the opportunity I believe I have what it takes to make those same jumps in a new career.
          </p>
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
          <p></p>
        </div>
      </div>
    </section>
  );
}

export default About;
