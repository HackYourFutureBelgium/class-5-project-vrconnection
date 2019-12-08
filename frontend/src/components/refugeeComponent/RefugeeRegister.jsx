import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Form,
  Col,
  Row,
  Button,
} from 'react-bootstrap';
import useForm from 'react-hook-form';
import API_URL from '../../api';
import RefugeeRegisterInfo from './RefugeeRegisterInfo';

const RefugeeRegister = () => {
  const [signUp, setSignUp] = useState(false);
  const [error, setError] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (
    {
      firstName, lastName,
      username, password,
      email, phoneNumber,
      country, language, help,
      age, gender,
    },
  ) => {
    axios
      .post(`${API_URL('dev')}/refugee`,
        {
          firstName, lastName, username, password, email, phoneNumber, country, language, help, age, gender,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
      .then(() => { setSignUp(true) })
      .catch((err) => {
        setError(err)
      })
    if (error) console.log(error);

    if (!error) alert('okay')
  }

  return (
    <Row>
      <Col sm={6}><RefugeeRegisterInfo /></Col>
      <Col sm={6}>

        <Container className="border border-primary">
          <h1 className="pb-2">Refugee Registration Form</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
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
              <Form.Group as={Col} controlId="formGridUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="username"
                  ref={register({ required: true })}
                />
                <p className="input_errors">{errors.username && 'Username required'}</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  ref={register({ required: true })}
                />
                <p className="input_errors">{errors.password && 'password required'}</p>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  ref={register({
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    },
                  })}
                />
                <p className="input_errors">{errors.email && 'please enter a valid email'}</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  ref={register({ minlength: 8, maxlength: 15 })}
                />
                <p className="input_errors">{errors.phoneNumber && ' please enter valid phone number'}</p>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  as="select"
                  name="country"
                  ref={register}
                >
                  <option>Country one</option>
                  <option>Country two</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLanguage">
                <Form.Label>Language</Form.Label>
                <Form.Control
                  as="select"
                  name="language"
                  ref={register}
                >
                  <option>Language one</option>
                  <option>Language two</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridHelp">
                <Form.Label>Need Help </Form.Label>
                <Form.Control
                  as="select"
                  name="help"
                  ref={register({ required: true })}
                >
                  <option>shelter</option>
                  <option>Help two</option>
                </Form.Control>
                <p className="input_errors">{errors.help && 'please select one help'}</p>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Row} controlId="formGridAge">
                <Form.Label column sm={2}>Age</Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="number"
                    name="age"
                    placeholder="Your Age"
                    ref={register({ required: true })}
                  />
                </Col>
                <p className="input_errors">{errors.age && 'age is required'}</p>
              </Form.Group>

              <Form.Group as={Row} controlId="formGridGender">
                <Form.Label column sm={3}>Gender </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    as="select"
                    name="gender"
                    ref={register({ required: true })}
                  >
                    <option>male</option>
                    <option>Gender two</option>
                  </Form.Control>
                </Col>
                <p className="input_errors">{errors.gender && 'gender is required'}</p>
              </Form.Group>
            </Form.Row>

            <Button type="submit" size="lg" className="btn btn-primary mx-auto d-block mt-4">
              Submit
            </Button>
          </Form>
        </Container>
      </Col>
    </Row>
  )
}

export default RefugeeRegister;
