import React from "react"
import Layout from "../components/Layout"
import FeaturedPost from "../components/featuredPost"
import AboutMe from "../components/aboutMe"
import Backlog from "../components/backlog"
import SocialMedia from "../components/socialMedia"
import Contact from "../components/contact"

import "./index.css"

export default () => (
  <Layout>
    <FeaturedPost />
    <div className="index__wrapper">
      <div className="index__leftColumn">
        <AboutMe />
        <SocialMedia />
      </div>
      <Backlog />
    </div>
    <Contact />
  </Layout>
)
