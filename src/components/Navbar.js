
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';


function NavBar() {


    return( 
        <Navbar className='navbar' data-bs-theme="dark">
        <Container>
          <Navbar.Brand className='brand' href="/">The GameHub</Navbar.Brand>
          <Nav>
            <Nav.Link className='link' href="/">Home</Nav.Link>
            <Nav.Link className='link' href='/Contact'>Contact</Nav.Link>
            <Nav.Link className='link' href="/About">About</Nav.Link>
            <NavDropdown className='link' title="Shop" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Product">Video Games</NavDropdown.Item>
              <NavDropdown.Item href="/Product">
                Consoles
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Product">
                Explore
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='link' href="/HomeFR">FR</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    );
}
export default NavBar;