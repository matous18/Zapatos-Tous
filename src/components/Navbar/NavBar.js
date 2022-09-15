import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { NavDropdown } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className="BrandName">Shoestore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='linkContainer'>
              <Link to='/' className="linkNav" >Home</Link>
            </Nav.Link>
            <NavDropdown title="Categoría" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className='linkDropdown'>
              <Link to='/category/Casual' className="linkNav" >Casual</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='linkDropdown'>
              <Link to='/category/Formal' className="linkNav" >Formal</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
        <CartWidget></CartWidget>
    </Navbar>
  );
}

export default NavBar;