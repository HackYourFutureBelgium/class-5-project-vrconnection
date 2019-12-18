/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */

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
import countriesAndLanguage from '../../data/countriesAndLanguage.json';

import { AuthContext } from '../Auth';
import confirmMessage from '../helpers/ConfirmMessage';

const RefugeeEditProfile = ({ setError }) => {
  const [edited, setEdited] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const { registeredRefugee } = useContext(AuthContext);
  if (registeredRefugee === undefined) {
    return (<h1>loading ...</h1>)
  }

  const id = registeredRefugee._id;

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
      .patch(
        `${API_URL()}/refugee/${id}`,
        {
          firstName,
          lastName,
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
    setEdited(true);
  };

  return (
    <Row>
      <Col sm={6}>
        <div>
          <p>Edit the page and click the save button</p>
        </div>
      </Col>
      <Col sm={6}>
        <Container className="border border-primary">
          <h1 className="pb-2">Edit Refugee Profile  </h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Card>
              <Card.Header>
                <h3> Personal Information  </h3><hr />
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      defaultValue={registeredRefugee.firstName}
                      ref={register({ required: true })}
                    />
                    <p className="input_errors">{errors.firstName && 'First Name required'}</p>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      defaultValue={registeredRefugee.lastName}
                      ref={register({ required: true })}
                    />
                    <p className="input_errors">{errors.lastName && 'Last Name required'}</p>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridAge">
                    <Form.Label>
                      Age
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="number"
                        name="age"
                        defaultValue={registeredRefugee.age}
                        ref={register({ required: true })}
                      />
                    </Col>
                    <p className="input_errors">{errors.age && 'age is required'}</p>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridGender">
                    <Form.Label sm={3}>
                      Gender{' '}
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        as="select"
                        name="gender"
                        defaultValue={registeredRefugee.gender}
                        ref={register({ required: true })}
                      >
                        <option>male</option>
                        <option>female</option>
                        <option>other</option>
                      </Form.Control>
                    </Col>
                    <p className="input_errors">{errors.gender && 'gender is required'}</p>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Col sm={6}>
                      <Form.Control
                        type="number"
                        name="phoneNumber"
                        defaultValue={registeredRefugee.phoneNumber}
                        ref={register({ minlength: 8, maxlength: 15 })}
                      />
                    </Col>
                    <p className="input_errors">
                      {errors.phoneNumber && ' please enter valid phone number'}
                    </p>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control as="select" name="country" defaultValue={registeredRefugee.country} ref={register}>
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
                      defaultValue={registeredRefugee.language}
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
                  <Form.Group as={Col} controlId="formGridHelp">
                    <Form.Control as="select" name="help" defaultValue={registeredRefugee.help} multiple ref={register({ required: true })}>
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
                    <p className="input_errors">{errors.help && 'please select one help'}</p>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group controlId="formDescription" as={Col}>
                    <Form.Label sm={6}>Describe your needs in detail:</Form.Label>
                    <Form.Control
                      name="description"
                      as="textarea"
                      defaultValue={registeredRefugee.description}
                      ref={register}
                    />
                  </Form.Group>
                </Form.Row>
              </Card.Header>
            </Card>
            <Button type="submit" size="lg" className="btn btn-primary mx-auto d-block mt-4">
              Save
            </Button>
          </Form>
          {edited ? confirmMessage('Updated Successfully', 'Great!', '/', 'OK') : null}
        </Container>
      </Col>
    </Row>
  );
};

export default RefugeeEditProfile;
