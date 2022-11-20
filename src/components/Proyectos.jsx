import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function HechoPorMi() {
  const cameliaLogo = require('../img/cameliaLogo.png');
  const obrasfunerariasLogo = require("../img/faviconObrasFunerariasCamelia.png");
  const japProyecto = require("../img/jap-proyecto.png")
  return (
    <>
      <h2>Mis Proyectos</h2>
      <div className='mx-5'>

        <CardGroup>
          <Card>
            <Card.Img variant="top" src={cameliaLogo} />
            <Card.Body>
              <Card.Title as="h3">Florería Camelia</Card.Title>
              <Card.Text>
                Creador de la pagina principal de Florería Camelia. <br></br>
                Hecha con <b>React</b>
              </Card.Text>
              <Button variant="primary" href="https://www.floreriacamelia.com" target="_blank" >
                Visitar Pagina
              </Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={obrasfunerariasLogo} />
            <Card.Body>
              <Card.Title as="h3">Obras Funerarias Camelia</Card.Title>
              <Card.Text>
                Pagina web de Obras Funerarias Camelia <br /> Hecha con <b>React</b>
              </Card.Text>
              <Button variant="primary" href="https://camelia.obrasfunerarias.com" target="_blank">
                Visitar Pagina <br />
              </Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={japProyecto} />
            <Card.Body>
              <Card.Title as="h3">Proyecto Obligatorio Desarrollo Web</Card.Title>
              <Card.Text>
                Proyecto del curso de Jóvenes a Programar (Ceibal)
              </Card.Text>
              <Button variant="primary" href="https://ivan1arriola.github.io/ProyectoJAP" target="_blank">
                Visitar Pagina
              </Button> {"  "}	
              <Button variant="secondary" href="/proyectojap">
                Ver más
              </Button>
            </Card.Body>
          </Card>
        </CardGroup>

      </div>
      <hr />
    </>
  );
}

export default HechoPorMi;