import React from "react";
import styled from "styled-components";
import foto from "../img/selfie.jpg";

const SobreMi = () => {



  /* Actualiza la edad automaticamente */
  const hoy = new Date();
  const cumpleanos = new Date("02/01/2000");
  let edad = hoy.getFullYear() - cumpleanos.getFullYear();
  let m = hoy.getMonth() - cumpleanos.getMonth();

  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
  }
  // ------

  return (
    <>
      <Title>Sobre Mi</Title>
      <FlexCentered >

        

        <Div >
          <Foto
            src={foto}
            alt="Selfie"
          />
        </Div>

        <Div >
          <P>Mi nombre es Ivan Arriola y tengo {edad} años.<br />
            Soy de  Montevideo, Uruguay.<br />
            Estudio Ingenieria en Computacion en la FING, UdelaR. <br />
            Tambien soy egresado de Jovenes a Programar (Ceibal) <br /> de su edición Desarrollo Web 2022</P>
        </Div>



      </FlexCentered>
    </>
  );
};
export default SobreMi;

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

const FlexCentered = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Div = styled.div`
`;


const Foto = styled.img`
  border-radius: 100%;
  padding: 1rem;
  width: 20rem;
`;

const P = styled.p`
  font-size: 1.5rem;
  text-align: center;
  padding: 1rem;
`;
