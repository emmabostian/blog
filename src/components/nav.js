import React from "react"
import { Link } from "gatsby"
import "./nav.css"

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/podcasts">Podcasts</Link>
      </li>
      <li>
        <Link to="/talks">Talks</Link>
      </li>
      <li>
        <Link to="/courses">Courses</Link>
      </li>
    </ul>
  </nav>
)

export default Nav
