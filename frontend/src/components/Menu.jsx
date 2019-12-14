import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavDropdown,
  Modal,
  Button,
} from 'react-bootstrap';
import { AuthContext } from './Auth';
import app from './base';

const PrivateMenu = () => (
  <>
    <NavDropdown title="Refugee" id="collasible-nav-dropdown">
      <NavDropdown.Item href="/refugees/profile">My Profile</NavDropdown.Item>
      <NavDropdown.Item href="/refugees/myHelp">My help</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="Volunteer" id="collasible-nav-dropdown">
      <NavDropdown.Item href="/volunteers/profile">My Profile</NavDropdown.Item>
      <NavDropdown.Item href="/volunteers/findHelp">I want to help</NavDropdown.Item>
      <NavDropdown.Item href="/volunteers/history">My history</NavDropdown.Item>
    </NavDropdown>
  </>
)

const Menu = () => {
  const { currentUser } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const email = currentUser ? currentUser.email : null;
  const handleOnClick = () => setShow(true);
  const handleLogOut = () => {
    app.auth().signOut();
    setShow(false);
  };
  const handleClose = () => setShow(false);

  return (
    <>
      <Navbar collapseOnSelect expand="sm" variant="dark" bg="dark" text="white">
        <Navbar.Brand>VRConnection</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {currentUser ? <PrivateMenu /> : null}
            <Nav.Link href="/faq">FAQ</Nav.Link>
            {!currentUser ? <Nav.Link href="/login">Log in</Nav.Link> : null}
            {!currentUser ? <Nav.Link href="/SignUp">SignUp</Nav.Link> : null}
            {currentUser ? <Nav.Link onClick={handleOnClick}>Log Out</Nav.Link> : null}
          </Nav>
        </Navbar.Collapse>
        {currentUser ? <div className="email"> {email}</div> : null}
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log-out</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">
            <Link to="/login" className="linkwhite" onClick={handleLogOut}>
              Bye
            </Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
};

export default Menu;
