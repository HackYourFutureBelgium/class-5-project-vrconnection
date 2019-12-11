import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Menu = () => (
  <Navbar collapseOnSelect expand="sm" variant="dark" bg="dark" text="white">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/refugees/profile">Refugee</Nav.Link>
        <NavDropdown title="Volunteer" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/volunteers/profile">Profile</NavDropdown.Item>
          <NavDropdown.Item href="/volunteers/findHelp">I want to help</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Register" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/volunteers/signup">Volunteer</NavDropdown.Item>
          <NavDropdown.Item href="/refugees/signup">Refugee</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/faq">FAQ</Nav.Link>
        <Nav.Link href="/login">Log in</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Menu;
