/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */

import React, { useState, useContext } from 'react';
import axios from 'axios';
import {
  Form, Button, Card, Row, Col, Container,
} from 'react-bootstrap';
import useForm from 'react-hook-form';
import VolunteerRegisterInfo from './VolunteerRegisterInfo';
import API_URL from '../../api';
import { AuthContext } from '../Auth';
import confirmMessage from '../helpers/ConfirmMessage';

const VolunteerEditProfile = ({ setError }) => {
  const [edited, setEdited] = useState(false);
  const { registeredVolunteer } = useContext(AuthContext);
  const { register, handleSubmit, errors } = useForm();
  if (registeredVolunteer === undefined) {
    return (<h1>loading ...</h1>)
  }

  const id = registeredVolunteer._id;

  const onSubmit = ({
    name,
    help,
    age,
    gender,
    description,
  }) => {
    axios
      .patch(
        `${API_URL()}/volunteer/${id}`,
        {
          name,
          help,
          age,
          gender,
          description,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .catch((err) => {
        setError(err);
      });
    setEdited(true);
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
            <Card.Body className="text-muted">
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="VolunteerName">
                  <Form.Label>My Name is </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    defaultValue={registeredVolunteer.name}
                    ref={register({ required: true })}
                  />
                  <p className="input_errors">{errors.name && 'Name is required'}</p>
                </Form.Group>
                <Form.Group controlId="VolunteerHelp">
                  <Form.Label>I can help with..</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue={registeredVolunteer.help}
                    name="help"
                    multiple
                    ref={register({ required: true })}
                  >
                    <p className="input_errors">{errors.help && 'please select help'}</p>
                    <option>advice</option>
                    <option>clothing</option>
                    <option>education</option>
                    <option>food</option>
                    <option>healthcare</option>
                    <option>legal advice</option>
                    <option>shelter</option>
                    <option>talk</option>
                    <option>other</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="VolunteerAge">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    name="age"
                    defaultValue={registeredVolunteer.age}
                    ref={register({ required: true })}
                  />
                  <p className="input_errors">{errors.age && 'age required'}</p>
                </Form.Group>

                <Form.Group controlId="VolunteerGender">
                  <Form.Label>My gender is:</Form.Label>
                  <Form.Control
                    as="select"
                    name="gender"
                    defaultValue={registeredVolunteer.gender}
                    ref={register({ required: true })}
                  >
                    <option>male</option>
                    <option>female</option>
                    <option>other</option>
                  </Form.Control>
                  <p className="input_errors">{errors.gender && 'gender required'}</p>
                </Form.Group>
                <Form.Group controlId="VolunteerDescription">
                  <Form.Label>Description (About Me)</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    defaultValue={registeredVolunteer.description}
                    name="description"
                    ref={register}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
          {edited ? confirmMessage('Updated Successfully', 'Well done', '/', 'Ok') : null}
        </Container>
      </Col>
    </Row>
  )
}

export default VolunteerEditProfile;
