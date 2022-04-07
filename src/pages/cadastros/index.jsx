import React from "react"
import Input from "../../components/input/index"

export default function Registros() {
  return (
    <div className="container-md p-5">
      <div className="d-flex justify-content-center w-100">
        <h2>Novo Curso</h2>
      </div>
      <div className="col-12 d-flex justify-content-end ">
        <button className="btn btn-success" onClick={(e) => this.save(e)}>
          Salvar
        </button>
      </div>

      <hr />
      <div className="d-flex align-self-center justify-content-center ">
        <div className="card d-flex align-self-center  w-100">
          <div className="card-body p-3 .d-flex .flex-direction-column">
            <Input className="col-4 " label="Código" type="text" placeholder="Digite o Código" />
            <Input className="col-12  mt-3" label="Título" type="text" placeholder="Digite o Título do Curso" />
            <Input className="col-12 mt-3 " label="Descrição" as="textarea" type="text" placeholder="Descreva sobre o Curso" />
          </div>
        </div>
      </div>
    </div>
  )
}
