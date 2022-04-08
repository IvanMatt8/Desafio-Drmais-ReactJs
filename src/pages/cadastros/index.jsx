import React from "react"
import Input from "../../components/input/index"
import { Formik } from "formik"
import { useCursoContent } from "../../hooks/context"

export default function Registros() {
  const { handleAddCurso } = useCursoContent()

  return (
    <div className="container-md p-5">
      <div className="d-flex justify-content-center w-100">
        <h2>Novo Curso</h2>
      </div>
      <div className="col-12 d-flex justify-content-end "></div>

      <hr />

      <div className="d-flex align-self-center justify-content-center ">
        <div className="card d-flex align-self-center  w-100">
          <Formik
            initialValues={{ codigo: "", titulo: "", descricao: "" }}
            validate={(values) => {
              const errors = {}
              if (!values.codigo) {
                errors.codigo = "Required"
              }

              if (!values.titulo) {
                errors.titulo = "Required"
              }

              if (!values.descricao) {
                errors.descricao = "Required"
              }

              return errors
            }}
            onSubmit={(values, { setSubmitting }) => {
              handleAddCurso({ ...values })
              setSubmitting(false)
            }}
          >
            {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
              <form className="card-body p-3 .d-flex .flex-direction-column" onSubmit={handleSubmit}>
                <Input
                  name="codigo"
                  onChange={handleChange}
                  value={values.codigo}
                  className="col-4 "
                  label="Código"
                  type="text"
                  placeholder="Digite o Código"
                />
                {errors.codigo && <p className="text-danger  ml-3 mt-2">Codigo e requirido</p>}
                <Input
                  name="titulo"
                  onChange={handleChange}
                  value={values.titulo}
                  className="col-12  mt-3"
                  label="Título"
                  type="text"
                  placeholder="Digite o Título do Curso"
                />
                {errors.titulo && <p className="text-danger  ml-3 mt-2">Titulo e requirido</p>}
                <Input
                  name="descricao"
                  onChange={handleChange}
                  value={values.descricao}
                  className="col-12 mt-3 "
                  label="Descrição"
                  as="textarea"
                  type="text"
                  placeholder="Descreva sobre o Curso"
                />
                {errors.descricao && <p className="text-danger  ml-3 mt-2">Descrição e requirido</p>}

                <button disabled={isSubmitting} type="submit" className="btn btn-success ml-3 mt-5">
                  Salvar
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}
