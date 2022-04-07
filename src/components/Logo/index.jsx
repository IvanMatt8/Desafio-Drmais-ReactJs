/* eslint-disable import/no-anonymous-default-export */
import "./index.css"
import React from "react"
import Logo from "../../assets/imgs/drmais.png"
import { Link } from "react-router-dom"

function LogoHeader() {
  return (
    <aside className="logo">
      <Link to="/" className="logo">
        <img className="logoDrmais" src={Logo} alt="logo Dr+" />
      </Link>
    </aside>
  )
}

export default LogoHeader
