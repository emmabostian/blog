import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import Layout from "../components/layout"
import arrow from "../../content/assets/arrow.png"
import "./courses.css"

export default ({ data }) => (
  <Layout>
    <h1>Courses</h1>
    <div className="course">
      <Img
        fixed={data.file.childImageSharp.fixed}
        objectFit="cover"
        objectPosition="50% 50%"
        alt="Design Systems"
        className="course__icon"
      />
      <div className="course__content">
        <h3 className="course__title">Foundation of Design Systems</h3>
        <p>
          Design systems are a hot topic in the world of development and all of
          the big companies are building one. But what is a design system and
          how do you build one?{" "}
        </p>
        <a
          href="https://frontendmasters.com/workshops/design-systems-storybook/"
          target="_blank"
          className="course__link"
        >
          <img
            className="course__buttonIcon"
            src={arrow}
            alt=""
            aria-hidden="true"
          />
          See more
        </a>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query DesignSystemsQuery {
    file(relativePath: { eq: "design-systems.jpg" }) {
      childImageSharp {
        fixed(width: 225, height: 225) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
