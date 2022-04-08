import React from "react"
import "./index.css"

function Card({ codigo, titulo, descricao }) {
  return (
    <div className="card-wrap">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">{codigo}</h5>
          <p className="card-text text-center">{titulo}</p>
        </div>
        <div className="card-body">
          <div className="card-title border p-3" style={{ height: 150 }}>
            <span>{descricao}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
