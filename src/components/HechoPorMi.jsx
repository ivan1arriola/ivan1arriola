import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HechoPorMi() {
  const cameliaLogo = require('../img/cameliaLogo.png');
  const cameliaLogo2 = require('../img/faviconCamelia.png');
  return (
    <>
        <h2>Hechos Por Mi</h2>
        <div className='container'>

          <div className='cads'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" className='card-img' src={cameliaLogo} />
            <Card.Body>
                <Card.Title>Floreria Camelia</Card.Title>
                <Card.Text>
                  Creador de la pagina principal de Floreria Camelia. <br></br>
                  Hecha con <b>Google Sites</b>
                </Card.Text>
                <Button variant="primary" href="https://www.floreriacamelia.com" target="_blank" >
                  Visitar Pagina
                </Button>
            </Card.Body>
            </Card>
          </div>
          
          <div className='cads'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" className='card-img' src={cameliaLogo2} />
            <Card.Body>
                <Card.Title>Floreria Camelia</Card.Title>
                <Card.Text>
                  Nueva pagina de Floreria Camelia <br/> Hecha con <b>React</b>
                </Card.Text>
                <Button variant="primary" href="https://ivan1arriola.github.io/floreria-camelia/" target="_blank">
                  Visitar Pagina (aun en construcción)
                </Button>
            </Card.Body>
            </Card>
          </div>
            
        </div>
        <hr/>
    </>
  );
}

export default HechoPorMi;