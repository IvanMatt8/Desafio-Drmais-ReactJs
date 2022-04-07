import React from "react"
import Main from "../../components/main/index"
import Card from "../../components/card/index"
import "./index.css"

function Home() {
  return (
    <Main icon="home" title="Inicio" subtitle="Projeto React">
      <div className="d-flex justify-content-center w-100">
        <h2>Cursos</h2>
      </div>
      <div className="col-12 d-flex justify-content-end ">
        <button className="btn btn-primary" onClick={(e) => this.save(e)}>
          + Adicionar
        </button>
      </div>
      <hr />
      <Card className="card-wrap" />
      <Card />
      <Card />
    </Main>
  )
}

export default Home
