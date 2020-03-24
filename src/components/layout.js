import React, { useState } from "react"
import Nav, { MobileNav } from "./nav"
import "./layout.css"

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <header>
        <p className="header__tagline">
          Every coder has their journey. This is mine.
        </p>
        <h1 className="header__title">Compiled</h1>
        <Nav />
        <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
