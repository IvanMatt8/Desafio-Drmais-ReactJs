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
        <Link to="/cadastros">
          <i className=" fa fa-users"></i>Novo Curso
        </Link>
        <Link to="/editar">
          <i className=" fa fa-users"></i>Editar Curso
        </Link>
      </nav>
    </aside>
  )
}
export default Navbar
