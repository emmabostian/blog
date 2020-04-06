import React, { useState } from "react"
import Layout from "../components/layout"
import { graphql, StaticQuery } from "gatsby"
import BlogPost from "../components/blogPost.js"
import "./blogs.css"

export default () => (
  <StaticQuery
    query={query}
    render={data => {
      const [allBlogs] = useState(data.allMarkdownRemark.edges)
      data.allMarkdownRemark.edges.map(({ node }) =>
        console.log(node.frontmatter.draft)
      )
      const [matchingPosts, setMatchingPosts] = useState(
        data.allMarkdownRemark.edges.filter(
          post => post.node.frontmatter.draft === false
        )
      )

      const filterPosts = e => {
        setMatchingPosts(
          allBlogs.filter(
            ({ node }) =>
              node.frontmatter.title
                .toLowerCase()
                .includes(e.target.value.toLowerCase()) &&
              node.frontmatter.draft !== true
          )
        )
      }
      return (
        <Layout>
          <h1>Blogs</h1>
          <div className="blogs__wrapper">
            <div className="blogs__search-wrapper">
              <label className="blogs__search-title" for="blog-search">
                Filter
              </label>
              <p>
                {matchingPosts.length} / {allBlogs.length} posts
              </p>
            </div>
            <input
              className="blogs__search"
              type="text"
              id="blog-search"
              onChange={e => filterPosts(e)}
            />
            {matchingPosts.map(({ node }) => (
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
      )
    }}
  />
)

const query = graphql`
  query AllBlogs {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            slug
            headerImage
            description
            date
            draft
          }
        }
      }
    }
  }
`
