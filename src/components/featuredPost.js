import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import arrow from "../../content/assets/arrow.png"
import "./featuredPost.css"

export default () => (
  <StaticQuery
    query={query}
    render={data => (
      <div className="featuredPost">
        <p className="featuredPost__featured">Featured post</p>
        <img
          className="featuredPost__headerImage"
          src={data.markdownRemark.frontmatter.headerImage}
          alt={data.markdownRemark.frontmatter.title}
        />
        <div className="featuredPost__content">
          <div className="featuredPost__textContent">
            <p className="featuredPost__title">
              {data.markdownRemark.frontmatter.title}
            </p>
            <p className="featuredPost__description">
              {data.markdownRemark.frontmatter.description}
            </p>
          </div>
          <Link
            to={data.markdownRemark.frontmatter.slug}
            className="featuredPost__button"
          >
            <img
              className="featuredPost__buttonIcon"
              src={arrow}
              alt=""
              aria-hidden="true"
            />
            Read more
          </Link>
        </div>
      </div>
    )}
  />
)

const query = graphql`
  query FeaturedPostQuery {
    markdownRemark(frontmatter: { title: { eq: "New Beginnings" } }) {
      frontmatter {
        title
        description
        headerImage
        slug
      }
    }
  }
`
