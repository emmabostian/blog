import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import arrow from "../../content/assets/arrow.png"
import "./featuredPost.css"

export default () => (
  <StaticQuery
    query={query}
    render={data => {
      let post = data.allMarkdownRemark.edges[0].node.frontmatter
      return (
        <div className="featuredPost">
          <p className="featuredPost__featured">Featured post</p>
          <img
            className="featuredPost__headerImage"
            src={post.headerImage}
            alt={post.title}
          />
          <div className="featuredPost__content">
            <div className="featuredPost__textContent">
              <p className="featuredPost__title">{post.title}</p>
              <p className="featuredPost__description">{post.description}</p>
            </div>
            <Link to={post.slug} className="featuredPost__button" aria-label={'Read more about the post '+post.title}>
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
      )
    }}
  />
)

const query = graphql`
  query FeaturedPostQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
