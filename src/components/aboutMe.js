import React from "react"
import { Link } from "gatsby"
import picture from "../../content/assets/emma.jpg"
import "../pages/page.css"
import "./aboutMe.css"

const AboutMe = () => (
  <aside className="aboutMe">
    <h2 className="page__subHeader">About Me</h2>
    <img className="page__image--small" src={picture} alt="Emma Bostian" />
    <p>
      I am a Software Engineer based out of Karlsruhe, Germany. Born and raised
      in Upstate New York, I sold everything and moved to Europe two years ago.
    </p>
    <p>
      In my spare time I have a podcast with two of my friends, I blog, and I
      create technical courses.
    </p>
    <p>
      I am a Software Engineer based out of Karlsruhe, Germany. Born and raised
      in Upstate New York, I sold everything and moved to Europe two years ago.
    </p>
    <Link className="learn-more" to="/about">
      Learn more
    </Link>
  </aside>
)

export default AboutMe
