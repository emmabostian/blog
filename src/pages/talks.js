import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Layout from "../components/layout"
import fedLove from "../../content/assets/fed-love.svg"
import ato from "../../content/assets/ato.svg"
import reactBoston from "../../content/assets/react-boston.svg"
import reactLive from "../../content/assets/react-live.svg"
import graphQLDay from "../../content/assets/graphql-day.svg"
import "./talks.css"

export default () => (
  <StaticQuery
    query={query}
    render={data => (
      <Layout>
        <SEO title="Compiled Blog" />

        <h1>Talks</h1>
        <p className="talks__paragraph">
          I love speaking at conferences and meeting new people! If you'd like
          to have me speak at your conference, feel free to send an email to
          emma.j.bostian@gmail.com!
        </p>
        <div className="talks__photo-wrapper">
          <Img
            style={{ width: "600px", height: "600px" }}
            fluid={data.frontendLove2.childImageSharp.fluid}
          />
          <Img
            style={{ width: "600px", height: "600px" }}
            fluid={data.frontendLove3.childImageSharp.fluid}
          />
          <Img
            style={{ width: "600px", height: "600px" }}
            fluid={data.reactLive1.childImageSharp.fluid}
          />
          <Img
            style={{ width: "600px", height: "600px" }}
            fluid={data.reactLive2.childImageSharp.fluid}
          />
          <Img
            style={{ width: "600px", height: "600px" }}
            fluid={data.reactLive3.childImageSharp.fluid}
          />
          <Img
            style={{ width: "600px", height: "600px" }}
            fluid={data.reactBoston.childImageSharp.fluid}
          />
        </div>
        <div className="talks__year">
          <h1 className="talks__date">2020</h1>
          <div className="talks-wrapper">
            <a
              rel="noopener noreferrer"
              href="https://www.frontenddeveloperlove.com/"
              target="_blank"
            >
              <img
                style={{ width: "200px" }}
                src={fedLove}
                alt="Frontend Developer Love Amsterdam"
              />
            </a>
          </div>
        </div>
        <div className="talks__year">
          <h1 className="talks__date">2019</h1>
          <div className="talks-wrapper">
            <a
              rel="noopener noreferrer"
              href="https://2020.allthingsopen.org/"
              target="_blank"
            >
              <img style={{ width: "200px" }} src={ato} alt="All Things Open" />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.reactboston.com/"
              target="_blank"
            >
              <img
                style={{ width: "200px" }}
                src={reactBoston}
                alt="React Boston"
              />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://reactlive.nl/"
              target="_blank"
            >
              <img
                style={{ width: "200px" }}
                src={reactLive}
                alt="React Live"
              />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.graphqlday.org/bodensee"
              target="_blank"
            >
              <img
                style={{ width: "200px" }}
                src={graphQLDay}
                alt="GraphQL Day"
              />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://reactjsgirls.com/"
              target="_blank"
            >
              <Img
                style={{ width: "200px" }}
                fluid={data.reactJsGirls.childImageSharp.fluid}
              />
            </a>
          </div>
        </div>
      </Layout>
    )}
  />
)

const query = graphql`
  query Talks {
    reactJsGirls: file(relativePath: { eq: "react-girls.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    frontendLove2: file(relativePath: { eq: "fed-love-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    frontendLove3: file(relativePath: { eq: "fed-love-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    reactLive1: file(relativePath: { eq: "react-live-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    reactLive2: file(relativePath: { eq: "react-live-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    reactLive3: file(relativePath: { eq: "react-live-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    reactBoston: file(relativePath: { eq: "react-boston.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
