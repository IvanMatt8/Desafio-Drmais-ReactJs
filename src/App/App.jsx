import "./App.css"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import Rotas from "../routes/Routes"

import Logo from "../components/Logo/index"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

function App(props) {
  return (
    <BrowserRouter>
      <div className="app">
        <Rotas />
        <Logo />
        <Navbar />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
