import "./App.css"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import Rotas from "../routes/Routes"

import Logo from "../components/Logo/index"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { CursoContent } from "../hooks/context"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <CursoContent>
          <Rotas />
          <Logo />
          <Navbar />
          <Footer />
        </CursoContent>
      </div>
    </BrowserRouter>
  )
}

export default App
