import React from 'react';
import { Container, Col, Image } from 'react-bootstrap';
import logo from '../assets/images/logo.png';

const About = () => (
  <Container>
    <h1 className="bd-content">Our Project - VRConnection</h1>
    <p>
      The Inspiration of Our Project is Hack Your Furute and mainly the Coaches who
      have gaven us their time in these sevens months.
    </p>
    <p>
      Volunteer and Refugee Connection is a community based project which aims to help refugges
      providing them useful information and make them connect with  volunteers that can help them.
    </p>

    <Col xs={6} md={6}>
      <Image className="mx-auto d-block fluid" src={logo} rounded />
    </Col>
  </Container>
)

export default About;
