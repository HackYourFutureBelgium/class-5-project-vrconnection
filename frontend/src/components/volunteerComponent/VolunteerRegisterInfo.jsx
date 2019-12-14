import React from 'react';
import {
  Container,
  Col,
  Image,
  Alert,
} from 'react-bootstrap';
import logo from '../../assets/images/refugees-volunteers-friend.jpg';

const VolunteerRegisterInfo = () => (
  <Container>
    <h1 className="bd-content">Volunteer</h1>
    <p>
      Volunteering can give you the opportunity to try something new, gain experience, develop skills,
      improve your career prospects, build confidence and meet new people.
    </p>
    <Col xs={6} md={6}>
      <Image src={logo} thumbnail />
    </Col>

    <p>
      Socially, the benefits of volunteering show up quickly and have long-term effects. Social interaction
      improves mental and physical health, according to Psychology Today. The benefits of consistent socializing include better brain function and lower risk for depression and anxiety. You also improve your immune system.
    </p>

    <Alert variant="warning">
    Please fill out this form to provide your information to the people that you want to help.
    </Alert>

  </Container>
)

export default VolunteerRegisterInfo;
