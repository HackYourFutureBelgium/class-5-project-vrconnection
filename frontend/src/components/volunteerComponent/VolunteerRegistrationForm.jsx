/* eslint-disable indent */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */

import React, { useState, useContext } from 'react';
import axios from 'axios';
import {
  Form, Button, Card, Row, Col, Alert, Container,
} from 'react-bootstrap';
import VolunteerRegisterInfo from './VolunteerRegisterInfo';
import API_URL from '../../api';
import SubmitConfirmation from '../refugeeComponent/SubmitConfirmation';
import { AuthContext } from '../Auth';

function VolunteerRegistrationForm({ formVolunteer, setFormVolunteer }) {
  const { currentUser } = useContext(AuthContext);

  let emailDefault = '';
  let email = '';
  if (currentUser) {
    emailDefault = currentUser.email;
    email = emailDefault;
  }

  const [signUp, setSignUp] = useState(false);
  const [name, setName] = useState('');
  const [help, setHelp] = useState([]);
  const [age, setAge] = useState(18);
  const [gender, setgender] = useState('male');
  const [description, setDescription] = useState('');

  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }

  const handleHelp = (e) => {
    const options = e.target.options;
    const optionsSelected = [];
    for (let i = 0; i < options.length; i += 1) {
      if (options[i].selected) {
        optionsSelected.push(options[i].value);
      }
    }
    setHelp(optionsSelected);
  }
  const handleAge = (e) => {
    e.preventDefault();
    setAge(e.target.value);
  }
  const handleGender = (e) => {
    e.preventDefault();
    setgender(e.target.value);
  }
  const handleDescription = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`${API_URL()}/volunteer`, {
      name,
      email,
      help,
      age,
      gender,
      description,
    },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .catch((error) => setFormVolunteer({ error: 1, message: error.response.data }));
      setSignUp(true);
  };

  return (
    <Row>
      <Col sm={6}>
        <VolunteerRegisterInfo />
      </Col>
      <Col sm={6}>
        <Container className="border border-primary">
          <h1 className="pb-2">Volunteer Registration  </h1>
          <Card className="register-volunteer">
            <Card.Header><b>Register like Volunteer</b></Card.Header>
            {
              formVolunteer.message !== undefined
                ? <Alert variant="warning">{formVolunteer.message.error}</Alert> : null
            }
            <Card.Body className="text-muted">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="VolunteerEmail">
                  <Form.Label>Email: {emailDefault}  </Form.Label>
                </Form.Group>
                <Form.Group controlId="VolunteerName">
                  <Form.Label>My Name is </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={handleName}
                  />
                </Form.Group>
                <Form.Group controlId="VolunteerHelp">
                  <Form.Label>I can help with..</Form.Label>
                  <Form.Control
                    required
                    as="select"
                    onChange={handleHelp}
                    multiple
                  >
                    <option>shelter</option>
                    <option>healthcare</option>
                    <option>education</option>
                    <option>legal advice</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="VolunteerAge">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="0"
                    value={age}
                    onChange={handleAge}
                  />
                </Form.Group>

                <Form.Group controlId="VolunteerGender">
                  <Form.Label>My gender is:</Form.Label>
                  <Form.Control as="select" onChange={handleGender}>
                    <option>male</option>
                    <option>female</option>
                    <option>other</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="VolunteerDescription">
                  <Form.Label>Description (About Me)</Form.Label>
                  <Form.Control as="textarea" rows="3" onChange={handleDescription} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              {signUp ? <SubmitConfirmation /> : null}
            </Card.Body>
          </Card>
        </Container>
      </Col>
    </Row>
  )
}

export default VolunteerRegistrationForm;
