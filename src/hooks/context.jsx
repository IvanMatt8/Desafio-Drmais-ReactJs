import React, { createContext, useState, useContext, useCallback } from "react"
import { useNavigate } from "react-router-dom"

export const cursoContent = createContext(null)

export const CursoContent = ({ children }) => {
  const [cursos, setCursos] = useState([])
  let navigate = useNavigate()

  const handleAddCurso = useCallback(
    ({ codigo, titulo, descricao }) => {
      setCursos((old) => [...old, { codigo, titulo, descricao }])
      navigate("/")
    },
    [navigate]
  )

  const handleEditarCurso = useCallback(
    ({ codigo, titulo, descricao }) => {
      console.log("teste2", codigo, titulo, descricao)
      setCursos((old) =>
        old.map((curso) =>
          curso.codigo === codigo
            ? {
                codigo,
                titulo,
                descricao,
              }
            : curso
        )
      )
      navigate("/")
    },
    [navigate]
  )

  const handleDeletarCurso = useCallback(
    ({ codigo }) => {
      setCursos((old) => old.filter((curso) => curso.codigo !== codigo))
      navigate("/")
    },
    [navigate]
  )

  return (
    <cursoContent.Provider
      value={{
        cursos,
        handleAddCurso,
        handleEditarCurso,
        handleDeletarCurso,
      }}
    >
      {children}
    </cursoContent.Provider>
  )
}

export function useCursoContent() {
  const context = useContext(cursoContent)
  return context
}
