import styled from "styled-components";

const MaterialIcon = styled.i.attrs(() => ({ className: "material-icons" }))`
  background-color: green;
  font-size: 100px;
  &:after {
    content: ${props => props.iconName || "help"};
  }
`;

const Container = styled.div`
  background-color: #f5f5f5;
  border-radius: 100px;
  text-align: center;
  margin: auto;
  margin-top:10px;
  margin-bottom:10px;
  height: 90vh;
  .material-symbols-outlined {
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48
  }
  `

const Div = styled.div`
  background-color: #f5f5f5;
`;

const Title = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  `

const Text = styled.p`
  font-size: 1.5rem;
  text-align: center;
`

const List = styled.ul`
  font-size: 1.5rem;
  text-align: center;
  text-decoration: none;
`
const Item = styled.li`
  font-size: 1.5rem;
  text-align: center;
  text-decoration: none;
`

const RollbackButton = styled.button`
  background-color: #f5f5f5;
  border-radius: 100px;
  text-align: center;

  `

const goToHome = () => {
  window.location = "/";
}



function ProyectoJAP() {
  return (
    <Container>
      <h2>Proyecto Obligatorio Desarrollo Web de Jovenes a Programar</h2>
      <p>
        Este es el proyecto obligatorio del curso de Desarrollo Web de Jovenes a
        Programar.
      </p>
      <RollbackButton onClick={goToHome} />
      <MaterialIcon iconName="check" />
      <span class="material-symbols-outlined">
arrow_back
</span>
      <div className="mx-5">
        <Div>
          <Div>
            <Title>Descripcion</Title>
            <Text>
              El proyecto consiste en crear una incremento de funcionalidades de
              un e-commerce de una empresa ficticia de venta de productos
              varios. <br /> La página debe ser responsiva, es decir, debe verse bien
              en computadoras de escritorio, tablets y celulares. <br /> La página fue
              desarrollada con Javascript, HTML, CSS, Boostrap y NodeJs, y fue publicada
              en GitHub Pages. <br /> El proyecto fue de caracter individual y fue
              desarrollado en 8 entregas en 4 meses (julio a noviembre de 2022).
            </Text>
          </Div>
          <Div>
            <Title>Tecnologias</Title>
            <Text>
              <List>
                <Item>HTML</Item>
                <Item>CSS</Item>
                <Item>Javascript</Item>
                <Item>NodeJs</Item>
                <Item>Bootstrap</Item>
              </List>
            </Text>
          </Div>
          <Div>
            <Title>Enlaces</Title>
            <Text>
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
            </Text>
          </Div>
        </Div>
      </div>
    </Container>
  );
}

export default ProyectoJAP;