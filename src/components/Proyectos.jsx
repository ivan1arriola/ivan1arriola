import React from "react";
import styled from "styled-components";
import floreriaCamelia from "../img/floreriaCamelia.svg";
import obrasCamelia from "../img/camelia.svg";
import jovenesAProgramar from "../img/jap-proyecto.png";

const proyectosArray = [
  {
    title: 'Floreria Camelia',
    text: 'Sitio web de una floreria',
    imgSrc: floreriaCamelia,
    link: 'https://www.floreriacamelia.com/'
  },
  {
    title: 'Camelia Obras Funerarias',
    text: 'Sitio web de una empresa de Obras Funerarias',
    imgSrc: obrasCamelia,
    link: 'https://camelia.obrasfunerarias.com/'
  },
  {
    title: 'Proyecto Obligatorio Desarrollo Web',
    text: 'Proyecto del curso de Jóvenes a Programar (Ceibal)',
    imgSrc: jovenesAProgramar,
    link: '/proyectojap'
  }

];

const Card = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  width: 80%;
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  @media (min-width: 768px) {
    width: 40%;
  }
  
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
`;

const CardText = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;

const CardImg = styled.img`
  border-radius: 100%;
  padding: 1rem;
  width: 100%;
  height: 100%;
`;

const CardImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  
`;

const CardLinkButton = styled.a`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100%;
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: #f5f5f5;
  transition: all 0.3s ease-in-out;
  border: 1px solid #f5f5f5;
  &:hover {
    background-color: #e0e0e0;
  }
`;

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

const renderObjToHtml = (array) =>
  array.map(({ imgSrc, text, title, link }) => (
    <Card>
      <CardImgContainer>
        <CardImg src={imgSrc} />
      </CardImgContainer>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
      <CardLinkButton href={link}>Visitar Pagina</CardLinkButton>
    </Card>
  )
  );

const HechoPorMi = () => {
  return (
    <>
      <Title>Mis Proyectos</Title>
      <CardContainer>
        {renderObjToHtml(proyectosArray)}
      </CardContainer>

    </>
  );

};

export default HechoPorMi;