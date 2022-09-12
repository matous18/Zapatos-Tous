import Container from 'react-bootstrap/Container';
import { Card } from 'react-bootstrap';
import './Footer.css';

function Footer () {
    return(
        <Container className='Footer'>
            <Card.Footer>
                    <Card.Title>About Us</Card.Title>
                    <Card.Text>
                        ShoeStore
                    </Card.Text>
                    <Card.Link href="#">Follow us</Card.Link>
                    <Card.Title>Newsletter</Card.Title>
                    <Card.Text>
                        Contact us!
                    </Card.Text>
                    <Card.Link href="#">Follow Us</Card.Link>
            </Card.Footer>
        </Container>
    );
}

export default Footer;