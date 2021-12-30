import React from "react";

function About() {
  return (
    <section className="content">
      <div id="about">
        <img
          src={require(`../../assets/pictures/Headshot.jpg`).default}
          alt="Bio-picture"
          className="aboutMe-img"
        />
        <div className="aboutMeText">
          <h1>About Me</h1>
          <p>
          I am a current student at the University of Utah enrolled in Full Stack Web Development bootcamp. Currently I am a General Manager in the quick service restaurant industy for the last 14 years at the same company. I started as a regular daytime lunch worker and with ambition I moved up the chain quickly and was a GM in the first 4 years of working there. I am now looking to change careers to continue to grow and be able to provide for my family. Givin the opportunity I believe I have what it takes to make those same jumps in a new career.
          </p>
          <p></p>
        </div>
      </div>
    </section>
  );
}

export default About;
