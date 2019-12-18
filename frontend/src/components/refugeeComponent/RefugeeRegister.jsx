/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */

import React, { useState, useContext } from 'react';
import axios from 'axios';
import {
  Container,
  Form,
  Col,
  Row,
  Button,
  Card,
} from 'react-bootstrap';
import useForm from 'react-hook-form';
import API_URL from '../../api';
import RefugeeRegisterInfo from './RefugeeRegisterInfo';
import countriesAndLanguage from '../../data/countriesAndLanguage.json';
import { AuthContext } from '../Auth';
import typesOfHelp from '../../data/typeOfHelps';
import confirmMessage from '../helpers/ConfirmMessage';

const RefugeeRegister = ({ setError }) => {
  const [signUp, setSignUp] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const { currentUser } = useContext(AuthContext);

  let emailDefault = '';
  let email = '';
  if (currentUser) {
    emailDefault = currentUser.email;
    email = emailDefault;
  }

  const onSubmit = ({
    firstName,
    lastName,
    phoneNumber,
    country,
    language,
    help,
    age,
    gender,
    description,
  }) => {
    axios
      .post(
        `${API_URL()}/refugee`,
        {
          firstName,
          lastName,
          email,
          phoneNumber,
          country,
          language,
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
    setSignUp(true);
  };

  return (
    <Row>
      <Col sm={6}>
        <RefugeeRegisterInfo />
      </Col>
      <Col sm={6}>
        <Container className="border border-primary">
          <h1 className="pb-2">Refugee Registration  </h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Card>
              <Card.Header>
                <h3> Personal Information  </h3><hr />
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email: {emailDefault} </Form.Label>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="Your Name"
                      ref={register({ required: true })}
                    />
                    <p className="input_errors">{errors.firstName && 'First Name required'}</p>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      ref={register({ required: true })}
                    />
                    <p className="input_errors">{errors.lastName && 'Last Name required'}</p>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="number"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      ref={register({ minlength: 8, maxlength: 15 })}
                    />
                    <p className="input_errors">
                      {errors.phoneNumber && ' please enter valid phone number'}
                    </p>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridAge" className="col-md-3">
                    <Form.Label>Age </Form.Label>
                    <Form.Control
                      type="number"
                      name="age"
                      placeholder="Age"
                      ref={register({ required: true })}
                    />
                    <p className="input_errors">{errors.age && 'age is required'}</p>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridGender" className="col-md-3">
                    <Form.Label sm={3}>
                      Gender{' '}
                    </Form.Label>
                    <Form.Control as="select" name="gender" ref={register({ required: true })}>
                      <option>male</option>
                      <option>female</option>
                      <option>other</option>
                    </Form.Control>
                    <p className="input_errors">{errors.gender && 'gender is required'}</p>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control as="select" name="country" ref={register}>
                      {countriesAndLanguage.map((country) => (
                        <option key={country.Name}>{country.Name}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLanguage">
                    <Form.Label>Language</Form.Label>
                    <Form.Control
                      as="select"
                      name="language"
                      ref={register}
                      defaultValue="English"
                    >
                      {countriesAndLanguage.map((country) => (
                        <option key={country.Name}>{country.Language}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
              </Card.Header>
            </Card>
            <Card>
              <Card.Header>
                <h3> I need help in:</h3> <hr />
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridHelp" key="custom-inline-checkbox" className="mb-3">
                    {typesOfHelp.map((help, index) => (
                      <Form.Check
                        custom
                        type="checkbox"
                        name="help"
                        label={help}
                        value={help}
                        id={`custom-inline-checkbox-${index}`}
                        ref={register({ required: true })}
                      />
                    ))}
                    <p className="input_errors">{errors.help && 'please select one help'}</p>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group controlId="formDescription" as={Col}>
                    <Form.Label sm={6}>Describe your needs in detail:</Form.Label>
                    <Form.Control name="description" as="textarea" ref={register} />
                  </Form.Group>
                </Form.Row>
              </Card.Header>
            </Card>
            <Button type="submit" size="lg" className="btn btn-primary mx-auto d-block mt-4">
              Submit
            </Button>
          </Form>
          {signUp ? confirmMessage('Refugee Registered Successfully', 'Thank you for Registering!', '/', 'OK') : null}
        </Container>
      </Col>
    </Row>
  );
};

export default RefugeeRegister;
