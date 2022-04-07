import React from "react"
import "./index.css"

function Card({ className, ...rest }) {
  return (
    <div className="card-wrap">
      <div className="card">
        <div className="card-body">
          <h5 {...rest} className="card-title text-center">
            123 Cód
          </h5>
          <p {...rest} className="card-text text-center">
            Curso Name
          </p>
        </div>
        <div className="card-body">
          <div className="card-title border p-3" style={{ height: 150 }}>
            <span {...rest}></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
