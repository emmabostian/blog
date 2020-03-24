import React from "react"
import Nav from "./nav"

const Layout = ({ children }) => (
  <div>
    <header>
      <p>Every coder has their journey. This is mine.</p>
      <h1>Compiled</h1>
      <Nav />
    </header>
    <main>{children}</main>
  </div>
)

export default Layout
