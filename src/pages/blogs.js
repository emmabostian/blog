import React from "react"
import Layout from "../components/layout"
import { Link, graphql, StaticQuery } from "gatsby"
import BlogPost from "../components/blogPost.js"
import "./blogs.css"

export default () => (
  <StaticQuery
    query={query}
    render={data => (
      <Layout>
        <h1>Blogs</h1>
        <div className="blogs__wrapper">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <BlogPost
              title={node.frontmatter.title}
              description={node.frontmatter.description}
              headerImage={node.frontmatter.headerImage}
              slug={node.frontmatter.slug}
              wide={true}
              key={node.frontmatter.slug}
            />
          ))}
        </div>
      </Layout>
    )}
  />
)

const query = graphql`
  query AllBlogs {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            slug
            headerImage
            description
            date
          }
        }
      }
    }
  }
`
