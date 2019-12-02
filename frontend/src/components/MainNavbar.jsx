// import React, { Component } from 'react';
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './CustomMainNavbar.css';

function MainNavbar() {
  return (
    <div>
      <Navbar bg="wight" variant="wight">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHkO0iK3fYFXv1oY0MX4eyBTjypWt5dQRVn2cwyGFSEm-dfqll&s"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{' '}
          VRConnection
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/">Log in</Nav.Link>
          <Nav.Link href="/SignUp">sign up</Nav.Link>
        </Nav>
      </Navbar>
      <Navbar bg="primary" variant="dark" expand="lg" my-4>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/VolunteerRegistration">Volunteer</Nav.Link>
            <Nav.Link href="/RefugeeRegistration">Refugee</Nav.Link>
            <Nav.Link href="/ContactUS">Contact us</Nav.Link>
            <NavDropdown title="Register" id="basic-nav-dropdown">
              <NavDropdown.Item href="/VolunteerRegistration">Volunteer</NavDropdown.Item>
              <NavDropdown.Item href="/RefugeeRegistration">Refugee</NavDropdown.Item>
              <NavDropdown.Item href="/Organization">Volunteer Organization</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Other">Other link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MainNavbar;
