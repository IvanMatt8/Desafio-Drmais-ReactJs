import React from "react"
import Main from "../../components/main/index"
import Card from "../../components/card/index"
import "./index.css"
import { useCursoContent } from "../../hooks/context"
import { Link } from "react-router-dom"

function Home() {
  const { cursos } = useCursoContent()

  return (
    <Main icon="home" title="Inicio" subtitle="Projeto React">
      <div className="d-flex justify-content-center w-100">
        <h2>Cursos</h2>
      </div>
      <div className="col-12 d-flex justify-content-end ">
        <Link to="cadastros" className="btn btn-primary">
          + Adicionar
        </Link>
      </div>
      <hr />
      <div className="content-cards">
        {cursos.map((curso) => (
          <Link to={`editar/${curso.codigo}`} className="card-link">
            <Card codigo={curso.codigo} titulo={curso.titulo} descricao={curso.descricao} />
          </Link>
        ))}
      </div>
    </Main>
  )
}

export default Home
