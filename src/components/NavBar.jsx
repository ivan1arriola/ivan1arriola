import React from 'react';
import styled from 'styled-components';
import Logo from '../img/default.png';
import useScreenWidth from '../CostumeHooks/useScreenWidth'







const Navbar = styled.nav`
  background-color: white;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
  position: ${props => props.position || 'absolute'};
  width: ${props => props.width};
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  border-radius: 105px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
  
`;



const LogoImg = styled.img`
  width:100px;
  padding:5px;

`

const Link = styled.a`
  color: black;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: green;
  }
`

const goToHome = () => {
  window.location = '/'
}


const NavBarGrande = () => {
  return(
    <>
    <Navbar width='80%' position='fixed'>
      <div style={{ display: "flex", alignItems: "center" }}>
        <LogoImg src={Logo} alt="Logo" onClick={goToHome}/>
      </div>
      <Link href="#sobreMi">Sobre Mi</Link>
      <Link href="#proyectos">Proyectos</Link>
      <Link href="#habilidades">Mis Habilidades</Link>
      <Link href='#redes'>Mis Links</Link>
    </Navbar>
    </>
  )
}

const NavBarPequenio = () => {
  return(
    <Navbar>
      <div style={{ display: "flex", alignItems: "center" }}>
        <LogoImg src={Logo} alt="Logo" onClick={goToHome}/>
      </div>
    </Navbar>
  )
}

const NavBar = () => {
  const [isSmallScreen] = useScreenWidth(625);
  return isSmallScreen? NavBarPequenio() : NavBarGrande();
};


export default NavBar;