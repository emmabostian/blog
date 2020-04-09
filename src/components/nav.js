import React from "react"
import { Link } from "gatsby"
import SocialMedia from "./socialMedia"
import menu from "../../content/assets/menu.png"
import close from "../../content/assets/close.png"
import "./nav.css"

const Nav = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__listItem">
        <Link to="/">Home</Link>
      </li>
      <li className="nav__listItem">
        <Link to="/about">About</Link>
      </li>
      <li className="nav__listItem">
        <Link to="/blogs">Blogs</Link>
      </li>
      <li className="nav__listItem">
        <Link to="/podcasts">Podcasts</Link>
      </li>
      <li className="nav__listItem">
        <Link to="/talks">Talks</Link>
      </li>
      <li className="nav__listItem">
        <Link to="/courses">Courses</Link>
      </li>
      <li className="nav__listItem">
        <SocialMedia />
      </li>
    </ul>
  </nav>
)

export const MobileNav = ({ menuOpen, setMenuOpen, handleLinkClick }) => {
  return (
    <div className="mobileView">
      <button
        className="mobileNav__button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <img
            src={close}
            alt="Close"
            aria-label="Close"
            aria-expanded={menuOpen}
          />
        ) : (
          <img
            src={menu}
            alt="Menu"
            aria-label="Menu"
            aria-expanded={menuOpen}
          />
        )}
      </button>
      <nav className={menuOpen ? "mobileNav mobileNav--show" : "mobileNav"}>
        <ul className="nav__list">
          <li className="nav__listItem">
            <Link id="home" onClick={e => handleLinkClick(e)} to="/">
              Home
            </Link>
          </li>
          <li className="nav__listItem">
            <Link id="about" onClick={e => handleLinkClick(e)} to="/about">
              About
            </Link>
          </li>
          <li className="nav__listItem">
            <Link id="blogs" onClick={e => handleLinkClick(e)} to="/blogs">
              Blogs
            </Link>
          </li>
          <li className="nav__listItem">
            <Link
              id="podcasts"
              onClick={e => handleLinkClick(e)}
              to="/podcasts"
            >
              Podcasts
            </Link>
          </li>
          <li className="nav__listItem">
            <Link id="talks" onClick={e => handleLinkClick(e)} to="/talks">
              Talks
            </Link>
          </li>
          <li className="nav__listItem">
            <Link id="courses" onClick={e => handleLinkClick(e)} to="/courses">
              Courses
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
