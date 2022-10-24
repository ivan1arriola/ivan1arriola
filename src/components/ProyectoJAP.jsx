import Accordion from "react-bootstrap/Accordion";

function ProyectoJAP() {
  return (
    <>
      <h2>Proyecto Obligatorio Desarrollo Web de Jovenes a Programar</h2>
      <p>
        Este es el proyecto obligatorio del curso de Desarrollo Web de Jovenes a
        Programar.
      </p>
      <div className="mx-5">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header as='h3'>Descripcion</Accordion.Header>
            <Accordion.Body>
              El proyecto consiste en crear una incremento de funcionalidades de
              un e-commerce de una empresa ficticia de venta de productos
              varios. <br/> La página debe ser responsiva, es decir, debe verse bien
              en computadoras de escritorio, tablets y celulares. <br/> La página fue
              desarrollada con Javascript, HTML, CSS, Boostrap y NodeJs, y fue publicada
              en GitHub Pages. <br/> El proyecto fue de caracter individual y fue
              desarrollado en 8 entregas en 4 meses (julio a noviembre de 2022).
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header as='h3'>Tecnologias</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>NodeJs</li>
                <li>Bootstrap</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header as='h3'>Enlaces</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <a
                    href="https://ivan1arriola.github.io/ProyectoJAP/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sitio Web
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.github.com/ivan1arriola/ProyectoJAP"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repositorio
                  </a>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default ProyectoJAP;