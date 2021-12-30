import React from "react";
import gitHubIcon from "../../assets/icons/github-fill.png";
import linkedInIcon from "../../assets/icons/linkedin-box-fill.png";
import twitterIcon from "../../assets/icons/twitter-line.png"

function Footer() {
  return (
    <footer>
      <div className="iconLayout">
        <div className="footer-icons">
          <a href="https://github.com/bradford583" target="_blank">
            <img className="icon" alt="" src={gitHubIcon}></img>
          </a>
          <a
            href="https://www.linkedin.com/in/chris-bradford-bb0a40212/"
            target="_blank"
          >
            <img className="icon" alt="" src={linkedInIcon}></img>
          </a>
          <a href="https://twitter.com/ChrisBinSLC" target="_blank">
            <img className="icon" alt="" src={twitterIcon}></img>
          </a>
        </div>
        <div className="copyright">&copy;2021 Chris Bradford</div>
      </div>
    </footer>
  );
}

export default Footer;
