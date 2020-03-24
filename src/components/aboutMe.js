import React from "react"
import { Link } from "gatsby"
import picture from "../../content/assets/emma.jpg"
import "../pages/page.css"

const AboutMe = () => (
  <aside
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRight: "1px solid #D8D8D8",
      paddingRight: "120px",
      height: "1000px",
    }}
  >
    <h2 className="page__subHeader">About Me</h2>
    <img className="page__image--small" src={picture} alt="Emma Bostian" />
    <p style={{ textAlign: "left", maxWidth: "360px" }}>
      I am a Software Engineer based out of Karlsruhe, Germany. Born and raised
      in Upstate New York, I sold everything and moved to Europe two years ago.
    </p>
    <p style={{ textAlign: "left", maxWidth: "360px" }}>
      In my spare time I have a podcast with two of my friends, I blog, and I
      create technical courses.
    </p>
    <p style={{ textAlign: "left", maxWidth: "360px" }}>
      I am a Software Engineer based out of Karlsruhe, Germany. Born and raised
      in Upstate New York, I sold everything and moved to Europe two years ago.
    </p>
    <p style={{ textAlign: "left", maxWidth: "360px" }}>
      I am a Software Engineer based out of Karlsruhe, Germany. Born and raised
      in Upstate New York, I sold everything and moved to Europe two years ago.
    </p>
    <Link to="/about">Learn more</Link>
  </aside>
)

export default AboutMe
