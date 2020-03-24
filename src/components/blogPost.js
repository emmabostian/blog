import React from "react"
import { Link } from "gatsby"
import arrow from "../../content/assets/arrow.png"
import "./blogPost.css"

const BlogPost = ({ title, description, headerImage, slug }) => {
  return (
    <div className="blogPost">
      <img className="blogPost__headerImage" src={headerImage} alt={title} />
      <div className="blogPost__content">
        <div className="blogPost__textContent">
          <p className="blogPost__title">{title}</p>
          <p className="blogPost__description">{description}</p>
        </div>
        <Link to={slug} className="blogPost__button">
          <img
            className="blogPost__buttonIcon"
            src={arrow}
            alt=""
            aria-hidden="true"
          />
          Read more
        </Link>
      </div>
    </div>
  )
}

export default BlogPost
