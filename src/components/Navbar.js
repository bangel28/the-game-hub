
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';


function NavBar() {


    return( 
        <Navbar className='navbar' data-bs-theme="dark">
        <Container>
          <Navbar.Brand className='brand' href="/the-game-hub">The GameHub</Navbar.Brand>
          <Nav>
            <Nav.Link className='link' href="/the-game-hub">Home</Nav.Link>
            <Nav.Link className='link' href='/the-game-hub/Contact'>Contact</Nav.Link>
            <Nav.Link className='link' href="/the-game-hub/About">About</Nav.Link>
            <NavDropdown className='link' title="Shop" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/the-game-hub/Product">Video Games</NavDropdown.Item>
              <NavDropdown.Item href="/the-game-hub/Product">
                Consoles
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/the-game-hub/Product">
                Explore
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='link' href="/the-game-hub/HomeFR">FR</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    );
}
export default NavBar;
