import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function AgregarEditar(props) {
  const { isEdit , nombre, ci, fechaNacimiento} = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" size="lg" onClick={handleShow}>
        Agregar Pasajero
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isEdit ? "Agregar" : "Editar"} Pasajero</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={nombre}
                placeholder="Ingrese nombre y apellido"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Cedula de Identidad</Form.Label>
              <Form.Control
                type="number"
                value={ci}
                placeholder="Ingrese cedula"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Fecha de Nacimiento</Form.Label>
              <Form.Control type="date" value={fechaNacimiento} autoFocus />
            </Form.Group>
          </Form>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AgregarEditar;
