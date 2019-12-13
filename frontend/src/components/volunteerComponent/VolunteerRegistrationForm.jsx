/* eslint-disable indent */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */

import React, { useState, useContext } from 'react';
import axios from 'axios';
import {
  Form, Button, Card, Row, Col, Alert,
} from 'react-bootstrap';
import API_URL from '../../api';
import { AuthContext } from '../Auth';

function VolunteerRegistrationForm({ formVolunteer, setFormVolunteer }) {
  const { currentUser } = useContext(AuthContext);

  let emailDefault = '';
  let email = '';
  if (currentUser) {
    emailDefault = currentUser.email;
    email = emailDefault;
  }

  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [help, setHelp] = useState([]);
  const [age, setAge] = useState(18);
  const [gender, setgender] = useState('male');
  const [description, setDescription] = useState('');

  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }
  const handleUserName = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  }
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
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

    axios.post(`${API_URL('dev')}/volunteer`, {
      username,
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
      .then((result) => setFormVolunteer(result))
      .catch((error) => setFormVolunteer({ error: 1, message: error.response.data }));
  };

  return (
    <Row className="register-volunteer">
      <Col sm={3}> </Col>
      <Col sm={8}>
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
              <Form.Group controlId="VolunteerUserName">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={handleUserName}
                />
              </Form.Group>

              <Form.Group controlId="VolunteerPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePassword}
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
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default VolunteerRegistrationForm;
