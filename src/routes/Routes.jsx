import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../pages/home"
import Cadastros from "../pages/cadastros/index"
import EditCurso from "../pages/editCurso/index"

function Rotas() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="cadastros" element={<Cadastros />} />
      <Route path="editar" element={<EditCurso />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default Rotas
