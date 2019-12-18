import React from 'react';
import {
  Container,
  Col,
  Image,
  Alert,
} from 'react-bootstrap';
import registeringGif from '../../assets/images/registering.gif';

const RefugeeRegisterInfo = () => (
  <Container>
    <h1 className="bd-content">Do you need help?.</h1>
    <Alert variant="warning">
      Please fill out the form to provide your information to the volunteers.
    </Alert>
    <Col xs={6} md={4}>
      <Image src={registeringGif} rounded />
    </Col>

  </Container>
)

export default RefugeeRegisterInfo;
