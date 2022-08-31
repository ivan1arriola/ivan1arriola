import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HechoPorMi() {
  const cameliaLogo = require('../img/cameliaLogo.png');
  return (
    <>
        <h2>Hechos Por Mi</h2>
        <div className='container'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" className='card-img' src={cameliaLogo} />
            <Card.Body>
                <Card.Title>Floreria Camelia</Card.Title>
                <Card.Text>
                  Creador de la pagina principal de Floreria Camelia. <br></br>
                  Hecha con Google Sites
                </Card.Text>
                <Button variant="primary" href="https://www.floreriacamelia.com" target="_blank" >
                  Visitar Pagina
                </Button>
            </Card.Body>
            </Card>
        </div>
        <hr/>
    </>
  );
}

export default HechoPorMi;