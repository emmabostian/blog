import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import "./featuredPost.css"

export default () => (
  <StaticQuery
    query={query}
    render={data => (
      <div className="featuredPost">
        <Link to={data.markdownRemark.frontmatter.slug}>
          <p className="featuredPost__featured">Featured post</p>
          <img
            src={data.markdownRemark.frontmatter.headerImage}
            alt={data.markdownRemark.frontmatter.title}
          />
          <div className="featuredPost__content">
            <p className="featuredPost__title">
              {data.markdownRemark.frontmatter.title}
            </p>
            <p className="featuredPost__description">
              {data.markdownRemark.frontmatter.description}
            </p>
          </div>
        </Link>
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
