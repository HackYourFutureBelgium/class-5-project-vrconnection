import React, { useContext } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { AuthContext } from './Auth';

const PrivateMenu = () => (
  <>
    <Nav.Link href="/refugees/profile">Refugee</Nav.Link>
    <NavDropdown title="Volunteer" id="collasible-nav-dropdown">
      <NavDropdown.Item href="/volunteers/profile">Profile</NavDropdown.Item>
      <NavDropdown.Item href="/volunteers/findHelp">I want to help</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="Register" id="collasible-nav-dropdown">
      <NavDropdown.Item href="/volunteers/signup">Voluteer</NavDropdown.Item>
      <NavDropdown.Item href="/refugees/signup">Reugees</NavDropdown.Item>
    </NavDropdown>
  </>
)


const Menu = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Navbar collapseOnSelect expand="sm" variant="dark" bg="dark" text="white">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          {currentUser ? <PrivateMenu /> : null}
          <Nav.Link href="/faq">FAQ</Nav.Link>
          {!currentUser ? <Nav.Link href="/login">Log in</Nav.Link> : null}
          {!currentUser ? <Nav.Link href="/SignUp">SignUp</Nav.Link> : null}
          {currentUser ? <Nav.Link href="/logout">Log Out</Nav.Link> : null}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default Menu;
