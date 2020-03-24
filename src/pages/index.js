import React from "react"
import Layout from "../components/Layout"
import FeaturedPost from "../components/featuredPost"
import AboutMe from "../components/aboutMe"
import Backlog from "../components/backlog"
import SocialMedia from "../components/socialMedia"

export default () => (
  <Layout>
    <FeaturedPost />
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "75vw",
        marginTop: "100px",
        borderTop: "1px solid #D8D8D8",
        borderBottom: "1px solid #D8D8D8",
      }}
    >
      <div>
        <AboutMe />
        <SocialMedia />
      </div>
      <Backlog />
    </div>
  </Layout>
)
