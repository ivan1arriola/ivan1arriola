import ListGroup from 'react-bootstrap/ListGroup';

function Habilidades() {
  return (
    <>
    <h2>Habilidades</h2>
    <div>
        <ListGroup>
        <ListGroup.Item variant="success" className='text'><p>C++ - Javascript - Bootstrap - React - Java </p></ListGroup.Item>
        <ListGroup.Item variant="warning" className='text'><p>Illustrator</p></ListGroup.Item>
        <ListGroup.Item variant="info" className='text'><p>Buscar por internet absolutamente todo lo que no sé</p></ListGroup.Item>
        </ListGroup>
    </div>
    
    <hr/>
    </>
    
  );
}

export default Habilidades;