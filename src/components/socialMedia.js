import React from "react"
import twitter from "../../content/assets/twitter.svg"
import instagram from "../../content/assets/instagram.svg"
import linkedin from "../../content/assets/linkedin.svg"
import github from "../../content/assets/github.svg"

export default () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderTop: "1px solid #D8D8D8",
      borderRight: "1px solid #D8D8D8",
      height: "200px",
    }}
  >
    <a
      style={{
        marginRight: "24px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      href="https://twitter.com/EmmaBostian"
    >
      <img
        style={{
          margin: "0",
          width: "24px",
          height: "24px",
          margin: "0",
        }}
        src={twitter}
        alt="Twitter"
      />
    </a>
    <a
      style={{
        marginRight: "24px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      href="https://www.instagram.com/emmabostian/"
    >
      <img
        style={{ margin: "0", width: "24px", height: "24px" }}
        src={instagram}
        alt="Instagram"
      />
    </a>
    <a
      style={{
        marginRight: "24px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      href="https://www.linkedin.com/in/emmawedekind/"
    >
      <img
        style={{ margin: "0", width: "24px", height: "24px" }}
        src={linkedin}
        alt="LinkedIn"
      />
    </a>
    <a
      style={{
        marginRight: "24px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      href="https://github.com/emmabostian"
    >
      <img
        style={{ margin: "0", width: "24px", height: "24px" }}
        src={github}
        alt="GitHub"
      />
    </a>
  </div>
)
