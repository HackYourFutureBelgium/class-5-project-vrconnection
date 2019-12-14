import React from 'react';
import {
  Container,
  Col,
  Image,
  Alert,
} from 'react-bootstrap';
import logo from '../../assets/images/friends.png';

const RefugeeRegisterInfo = () => (
  <Container>
    <h1 className="bd-content">Do you need help?.</h1>

    <p>
      Say us in detail what you need, the volunteer want to help you.
    </p>
    <Col xs={6} md={6}>
      <Image src={logo} thumbnail />
    </Col>


    <Alert variant="warning">
    Please fill out this form to provide your information to the volunteers.
    </Alert>

  </Container>
)

export default RefugeeRegisterInfo;
