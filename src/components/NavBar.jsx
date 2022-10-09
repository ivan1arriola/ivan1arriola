import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" >
      <Container>
        <Navbar.Brand as="h1" >Mi pagina personal<br/> ivan1arriola</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#sobreMi">Sobre Mi</Nav.Link>
            <Nav.Link href="#proyectos">Mis Proyectos</Nav.Link>
            <Nav.Link href="#habilidades">Habilidades</Nav.Link>
            <Nav.Link href="#redes">Redes Sociales</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;