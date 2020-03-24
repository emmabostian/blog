import React from "react"
import Nav from "./nav"
import "./layout.css"

const Layout = ({ children }) => (
  <div>
    <header>
      <p className="header__tagline">
        Every coder has their journey. This is mine.
      </p>
      <h1 className="header__title">Compiled</h1>
      <Nav />
    </header>
    <main>{children}</main>
  </div>
)

export default Layout
