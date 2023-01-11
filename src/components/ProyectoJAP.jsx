import styled from "styled-components";

const Container = styled.div`
  background-color: #f5f5f5;
  border-radius: 100px;
  text-align: center;
  margin: auto;
  margin-top:10px;
  margin-bottom:10px;
  min-height: 100vh;
  `

const Title = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  `

const Text = styled.p`
  font-size: 1.5rem;
  text-align: center;
  padding: 10px;
`

const Lista = styled.div`
  font-size: 1.5rem;
  text-align: center;
` 

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
`

const goToHome = () => {
  window.location = "/";
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
`
const Links = styled.a`
  text-decoration: none;
  color: blue;
  font-size: 1.5rem;
  text-align: center;
  &:hover {
    color: white;
  }
`

const MainTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  padding: 1rem;
`


function ProyectoJAP() {
  return (
    <Container>
      <MainTitle>Proyecto Obligatorio Desarrollo Web de Jovenes a Programar</MainTitle>

      <Text>
        Este es el proyecto obligatorio del curso de Desarrollo Web de Jovenes a
        Programar.
      </Text>

      <StyledDiv className="mx-5">
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
          
            <Title>Tecnologias</Title>
            <ListContainer>
              <Lista>
                HTML
              </Lista>
              <Lista>
                CSS
              </Lista>
              <Lista>
                Javascript
              </Lista>
              <Lista>
                NodeJs
              </Lista>
              <Lista>
                Bootstrap
              </Lista>
            </ListContainer>
          
            <Title>Enlaces</Title>
            <ListContainer>
                <Lista>
                  <Links
                    href="https://ivan1arriola.github.io/ProyectoJAP/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sitio Web
                  </Links>
                </Lista>
                <Lista>
                  <Links
                    href="https://www.github.com/ivan1arriola/ProyectoJAP"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repositorio
                  </Links>
                </Lista>
            </ListContainer>
        
      </StyledDiv>
    </Container>
  );
}

export default ProyectoJAP;