import React from "react"
import { Button, Modal } from "react-bootstrap"

function DeleteModal({ show, handleClose, onClick }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar a Exclusão?</Modal.Title>
      </Modal.Header>
      <Modal.Body>Deseja remover o registro do Curso Teste 2?</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="success" onClick={onClick}>
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteModal
