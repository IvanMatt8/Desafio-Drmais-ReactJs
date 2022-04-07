import React from "react"
import Main from "../../components/main/index"

function Home() {
  return (
    <Main icon="home" title="Inicio" subtitle="Projeto React">
      <div className="display-4">
        Bem Vindo!
        <hr />
        <p className="mb-0">
          Somos uma plataforma de telemedicina que busca democratizar e agilizar o acesso à saúde. Possuímos uma equipe altamente qualificada pronta
          para te orientar sobre cuidados com seu bem-estar.
        </p>
      </div>
    </Main>
  )
}

export default Home
