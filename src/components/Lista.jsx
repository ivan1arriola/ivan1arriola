import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { validateIdentificationNumber } from 'ciuy';

const renderLista = (array) => {
  console.log(array);
  return array.map((elem, index) => {
    const isRight= validateIdentificationNumber(elem.ci);
    return (
      <tr id={elem.id}>
        <td>{index + 1}</td>
        <td>{elem.nombre}</td>
        <td> <div className={isRight? "verificated": "error"}>{elem.ci}</div></td>
        <td>{elem.fechaNacimiento}</td>
        <td>
          <ButtonGroup aria-label="Basic example">
            <Button variant="info">Editar</Button>
            <Button variant="danger">Eliminar</Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  });
};

const Lista = (props) => {
  const { listaPasajeros } = props;
  return (
    <Table className="lista">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Cedula</th>
          <th>Fecha de Nacimiento</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>{renderLista(listaPasajeros)}</tbody>
    </Table>
  );
};

export default Lista;
