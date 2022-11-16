import ListGroup from "react-bootstrap/ListGroup";

function Habilidades() {
  return (
    <>
      <h2>Habilidades</h2>
      <div>
        <ListGroup>
          <ListGroup.Item action>
            <h3>Desarrollo Web</h3>
            <p>
              HTML, CSS, Javascript, Bootstrap, React, Express, Git, GitHub.
            </p>
          </ListGroup.Item>
          <ListGroup.Item action>
            <h3>Otros conocimientos en Programación</h3>
            <p>Java, C++ , Pascal, R</p>
          </ListGroup.Item>
          <ListGroup.Item action>
            <h3>Edición Multimedia</h3>
            <p>Adobe Illustrator</p>
          </ListGroup.Item>
        </ListGroup>
      </div>

      <hr />
    </>
  );
}

export default Habilidades;
