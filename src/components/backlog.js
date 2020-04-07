import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BlogPost from "./blogPost"
import "./backlog.css"

export default () => (
  <StaticQuery
    query={query}
    render={data => {
      let post1 = data.allMarkdownRemark.edges[1].node.frontmatter
      let post2 = data.allMarkdownRemark.edges[2].node.frontmatter
      return (
        <aside className="backlog">
          <h2 className="page__subHeader">Backlog</h2>
          <BlogPost
            title={post1.title}
            description={post1.description}
            slug={post1.slug}
            headerImage={post1.headerImage}
          />
          <BlogPost
            title={post2.title}
            description={post2.description}
            slug={post2.slug}
            headerImage={post2.headerImage}
          />
        </aside>
      )
    }}
  />
)

const query = graphql`
  query LastTwoBlogPostsQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            title
            slug
            description
            headerImage
          }
        }
      }
    }
  }
`
