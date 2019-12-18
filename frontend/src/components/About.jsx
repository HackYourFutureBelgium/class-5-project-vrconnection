import React from 'react';
import { Container, Col, Image } from 'react-bootstrap';
import logo from '../assets/images/banner-logo.png';

const About = () => (
  <Container
    style={{
      marginLeft: '3%',
      marginRight: '3%',
      marginTop: '3%',
      marginBottom: '5%',
    }}
  >
    <h1 className="bd-content">Volunteers and Refugees Connection</h1>
    <hr />
    <p>
      <strong>Volunteer and Refugee Connection(VRC) </strong>is a community based project which aims to help refugees
      to connect them with volunteers who can help them and provide them useful information about Refugee helping organizations in Belgium.
    </p>
    <p>
      The Inspiration of Our Project Is Hack Your Future community mainly the Coaches who
      motivated us, helped us understand when we were struggling, give us their valuable time.
      And peoples around us.
    </p>

    <Col xs={15} md={15}>
      <Image className="mx-auto d-block fluid" src={logo} fluid />
    </Col>
  </Container>
)

export default About;
