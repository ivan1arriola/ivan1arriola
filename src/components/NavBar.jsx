import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../img/ivan1arriola-logo/vector/default-monochrome.svg';
import Img from 'react-bootstrap/Image';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" variant="light" >
      <Container>
        <Navbar.Brand href='/'>
          <Img src={Logo} alt="logo" 
          style={{width: '150px', height: '50px'}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#sobreMi">Sobre Mi</Nav.Link>
            <Nav.Link href="/#proyectos">Mis Proyectos</Nav.Link>
            <Nav.Link href="/#habilidades">Habilidades</Nav.Link>
            <Nav.Link href="/#redes">Redes Sociales</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;