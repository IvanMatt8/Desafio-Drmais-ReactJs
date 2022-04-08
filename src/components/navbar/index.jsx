import "./index.css"
import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <aside className="menu-area">
      <nav className="menu">
        <Link to="/">
          <i className=" fa fa-home"></i>Inicio
        </Link>
      </nav>
    </aside>
  )
}
export default Navbar
