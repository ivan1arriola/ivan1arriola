import ListGroup from 'react-bootstrap/ListGroup';

function Habilidades() {
  return (
    <>
    <h2>Habilidades</h2>
    <div className='container'>
        <ListGroup>
        <ListGroup.Item variant="success" className='text'>Programar en C, Pascal, R, Javascript y Java</ListGroup.Item>
        <ListGroup.Item variant="info" className='text'>Buscar por internet absolutamente todo lo que no sé</ListGroup.Item>
        <ListGroup.Item variant="danger" className='text'>Bueno con la ofimatica</ListGroup.Item>
        <ListGroup.Item variant="warning" className='text'>Conocimientos de Illustrator</ListGroup.Item>
        <ListGroup.Item variant="primary" className='text'>Conocimientos de React</ListGroup.Item>
        </ListGroup>
    </div>
    
    <hr/>
    </>
    
  );
}

export default Habilidades;