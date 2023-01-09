import styled from "styled-components";

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  padding: 1rem;
  font-weight: 700;
  color: aliceblue;
  margin: auto;
  padding: 10px;
  text-shadow: 2px 2px 2px #000000;
  background: linear-gradient(30deg, #E90DCA, #1536F1);
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: #f5f5f5;
  transition: all 0.3s ease-in-out;
  margin: 1rem;
`;

const ItemTitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin: auto;
`;

const ItemText = styled.p`
  font-size: 1.5rem;
  text-align: center;
  `;

function Habilidades() {
  return (
    <>
      <Title>Habilidades</Title>
      <div>
        <ListGroup>
          <Item>
            <ItemTitle>Desarrollo Web</ItemTitle>
            <ItemText>
              HTML, CSS, Javascript, Bootstrap, React, Express, Git, GitHub.
            </ItemText>
          </Item>
          <Item>
            <ItemTitle>Otros conocimientos en Programación</ItemTitle>
            <ItemText>Java, C++ , Pascal, R</ItemText>
          </Item>
        </ListGroup>
      </div>

      <hr />
    </>
  );
}

export default Habilidades;
