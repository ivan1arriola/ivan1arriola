import Lista from "../components/Lista";
import { useState, useEffect } from "react";
import AgregarEditar from "../components/AgregarEditar";
import Button from "react-bootstrap/Button";

const VeroViajes = () => {
  const url = "https://sheetdb.io/api/v1/eiwg2r0kegtmw";
  const [pasajeros, setPasajeros] = useState([]);
  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setID] = useState(false);

  const [ci, setCi] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [nombre, setNombre] = useState("");

  const api = async (data, method = "POST") => {
    await fetch(url, {
      method: method, //'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => await res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        console.log("Success:", response);
        return response;
      });
  };

  const actualizarPasajero = async () => {
    const pasajero = pasajeros.find((pasajero) => id === pasajero.id);

    pasajero.nombre = nombre;
    pasajero.ci = ci;
    pasajero.fechaNacimiento = fechaNacimiento;

    await api(pasajero);
    getPasajeros()
    
  };

  const agregarPasajero = () => {};

  const handleClose = () => {
    setShow(false);
    isEdit ? actualizarPasajero() : agregarPasajero();
  };

  const handleShow = () => {
    if (!isEdit) {
      setCi("");
      setFechaNacimiento("");
      setNombre("");
    } else {
      let pasajero = pasajeros.find((pasajero) => pasajero.id === id);
      console.log(pasajero);
      setCi(pasajero.ci);
      setNombre(pasajero.nombre);
      setFechaNacimiento(pasajero.fechaNacimiento);
    }
    setShow(true);
  };

  const getPasajeros = async () => {
    let listaDePasajero = await fetch(url);
    listaDePasajero = await listaDePasajero.json();
    setPasajeros(listaDePasajero);
  };
  useEffect(() => {
    getPasajeros();
  }, []);

  return (
    <>
      <Button
        variant="success"
        size="lg"
        onClick={() => {
          setIsEdit(false);
          handleShow();
        }}
      >
        Agregar Pasajero
      </Button>
      <AgregarEditar
        show={show}
        handleClose={handleClose}
        isEdit={isEdit}
        ci={ci}
        fechaNacimiento={fechaNacimiento}
        nombre={nombre}
        setCi={setCi}
        setNombre={setNombre}
        setFechaNacimiento={setFechaNacimiento}
      />
      <h1>Lista de Viaje</h1>
      <Lista
        listaPasajeros={pasajeros}
        setIsEdit={setIsEdit}
        handleShow={handleShow}
        setID={setID}
      />
    </>
  );
};
export default VeroViajes;
