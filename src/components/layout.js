import React, { useState } from "react"
import { Link } from "gatsby"
import Nav, { MobileNav } from "./nav"
import "./layout.css"

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  window.addEventListener("resize", e => {
    if (window && window.innerWidth > 1000) {
      document.querySelector("html").setAttribute("style", "overflow: auto")
    } else {
      if (menuOpen) {
        document.querySelector("html").setAttribute("style", "overflow: hidden")
      } else {
        document.querySelector("html").setAttribute("style", "overflow: auto")
      }
    }
  })

  const handleSetMenuOpen = newValue => {
    setMenuOpen(newValue)
    if (newValue === true) {
      document.querySelector("html").setAttribute("style", "overflow: hidden")
    } else {
      document.querySelector("html").setAttribute("style", "overflow: auto")
    }
  }

  const handleLinkClick = e => {
    if (window && window.location.pathname !== `/${e.target.id}`) {
      document.querySelector("html").setAttribute("style", "overflow: auto")
    }
  }

  return (
    <div>
      <header>
        <p className="header__tagline">
          Every coder has their journey. This is mine.
        </p>
        <h1 className="header__title">
          <Link to="/">Compiled</Link>
        </h1>
        <Nav />
        <MobileNav
          menuOpen={menuOpen}
          setMenuOpen={handleSetMenuOpen}
          handleLinkClick={handleLinkClick}
        />
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
