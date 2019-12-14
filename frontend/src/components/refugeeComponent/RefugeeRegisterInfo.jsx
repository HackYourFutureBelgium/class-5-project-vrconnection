import React from 'react';
import {
  Container,
  Col,
  Image,
  Alert,
} from 'react-bootstrap';
import logo from '../../assets/images/refugees-volunteers-friend.jpg';

const RefugeeRegisterInfo = () => (
  <Container>
    <h1 className="bd-content">We want to help you.</h1>

    <Col xs={6} md={6}>
      <Image src={logo} thumbnail />
    </Col>


    <Alert variant="warning">
    Please fill out this form to provide your information to the volunteers.
    </Alert>

  </Container>
)

export default RefugeeRegisterInfo;
