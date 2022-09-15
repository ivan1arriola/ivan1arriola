import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function AgregarEditar(props) {
  const {
    isEdit,
    nombre,
    ci,
    fechaNacimiento,
    show,
    handleClose,
    setCi,
    setFechaNacimiento,
    setNombre,
  } = props;

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isEdit ? "Editar" : "Agregar"} Pasajero</Modal.Title>
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
                onChange={(event) => setNombre(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Cedula de Identidad</Form.Label>
              <Form.Control
                type="number"
                value={ci}
                placeholder="Ingrese cedula"
                autoFocus
                onChange={(event) => setCi(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Fecha de Nacimiento</Form.Label>
              <Form.Control
                type="date"
                value={fechaNacimiento}
                autoFocus
                onChange={(event) => setFechaNacimiento(event.target.value)}
              />
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
