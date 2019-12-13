/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

function VolunteerRegistrationAdded({ formVolunteer }) {
  const data = formVolunteer.data.volunteer;
  return (
    <Row className="register-volunteer">
      <Col sm={3}> </Col>
      <Col sm={8}>
        <Card className="register-volunteer">
          <Card.Header>
            <b>Volunteer Created</b>
          </Card.Header>
          <Card.Body className="text-muted">
            Username: {data.username}
            <br />
            Name: {data.name}
            <br />
            Email: {data.email}
            <br />
            Age: {data.age}
            <br />
            Gender: {data.gender}
            <br />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default VolunteerRegistrationAdded;
