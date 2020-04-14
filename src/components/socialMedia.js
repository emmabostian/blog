import React from "react"
import twitter from "../../content/assets/twitter.svg"
import instagram from "../../content/assets/instagram.svg"
import linkedin from "../../content/assets/linkedin.svg"
import github from "../../content/assets/github.svg"

import "./socialMedia.css"

export default () => (
  <div className="socialMedia">
    <a className="socialMedia__link" href="https://twitter.com/EmmaBostian" aria-label="Go to my Twitter profile">
      <img
        style={{
          margin: "0",
          width: "18px",
          height: "18px",
          margin: "0",
        }}
        src={twitter}
        alt="Twitter"
        aria-hidden="true"
      />
    </a>
    <a
      className="socialMedia__link"
      href="https://www.instagram.com/emmabostian/"
      aria-label="Go to my Instagram profile"
    >
      <img
        style={{ margin: "0", width: "18px", height: "18px" }}
        src={instagram}
        alt="Instagram"
        aria-hidden="true"
      />
    </a>
    <a
      className="socialMedia__link"
      href="https://www.linkedin.com/in/emmawedekind/"
      aria-label="Go to my Linkedin profile"
    >
      <img
        style={{ margin: "0", width: "18px", height: "18px" }}
        src={linkedin}
        alt="LinkedIn"
        aria-hidden="true"
      />
    </a>
    <a className="socialMedia__link" href="https://github.com/emmabostian" aria-label="Go to my Github profile">
      <img
        style={{ margin: "0", width: "18px", height: "18px" }}
        src={github}
        alt="GitHub"
        aria-hidden="true"
      />
    </a>
  </div>
)
