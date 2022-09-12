import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';
import './Navbar.css';

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
            <Nav.Link className='linkContainer'>
              <Link to='/category/Casual' className="linkNav" >Casual</Link>
            </Nav.Link>
            <Nav.Link className='linkContainer'>
              <Link to='/category/Formal' className="linkNav" >Formal</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
        <CartWidget></CartWidget>
    </Navbar>
  );
}

export default NavBar;