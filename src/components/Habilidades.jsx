import ListGroup from 'react-bootstrap/ListGroup';

function Habilidades() {
  return (
    <>
    <h2>Habilidades</h2>
    <div className='container'>
        <ListGroup>
        <ListGroup.Item variant="success" className='text'><p>Programar en C, Pascal, R, Javascript y Java</p></ListGroup.Item>
        <ListGroup.Item variant="info" className='text'><p>Buscar por internet absolutamente todo lo que no sé</p></ListGroup.Item>
        <ListGroup.Item variant="warning" className='text'><p>Conocimientos de Illustrator</p></ListGroup.Item>
        <ListGroup.Item variant="primary" className='text'><p>Conocimientos de React</p></ListGroup.Item>
        </ListGroup>
    </div>
    
    <hr/>
    </>
    
  );
}

export default Habilidades;