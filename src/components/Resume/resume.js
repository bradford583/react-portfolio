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
    </section>
  );
}

export default Resume;
