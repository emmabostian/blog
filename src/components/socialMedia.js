import React from "react"
import twitter from "../../content/assets/twitter.svg"
import instagram from "../../content/assets/instagram.svg"
import linkedin from "../../content/assets/linkedin.svg"
import github from "../../content/assets/github.svg"

import "./socialMedia.css"

export default () => (
  <div className="socialMedia">
    <a className="socialMedia__link" href="https://twitter.com/EmmaBostian">
      <img
        style={{
          margin: "0",
          width: "18px",
          height: "18px",
          margin: "0",
        }}
        src={twitter}
        alt="Twitter"
      />
    </a>
    <a
      className="socialMedia__link"
      href="https://www.instagram.com/emmabostian/"
    >
      <img
        style={{ margin: "0", width: "18px", height: "18px" }}
        src={instagram}
        alt="Instagram"
      />
    </a>
    <a
      className="socialMedia__link"
      href="https://www.linkedin.com/in/emmawedekind/"
    >
      <img
        style={{ margin: "0", width: "18px", height: "18px" }}
        src={linkedin}
        alt="LinkedIn"
      />
    </a>
    <a className="socialMedia__link" href="https://github.com/emmabostian">
      <img
        style={{ margin: "0", width: "18px", height: "18px" }}
        src={github}
        alt="GitHub"
      />
    </a>
  </div>
)
