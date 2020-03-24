import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

export default () => (
  <StaticQuery
    query={query}
    render={data => (
      <Link to={data.markdownRemark.frontmatter.slug}>
        <p>{data.markdownRemark.frontmatter.title}</p>
        <p>{data.markdownRemark.frontmatter.description}</p>
        <img
          src={data.markdownRemark.frontmatter.headerImage}
          alt={data.markdownRemark.frontmatter.title}
        />
      </Link>
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
