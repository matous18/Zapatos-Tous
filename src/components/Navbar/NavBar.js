import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>Shoestore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to='/'>Inicio</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/category/Casual'>Casual</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/category/Formal'>Formal</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget></CartWidget>
    </Navbar>
  );
}

export default NavBar;