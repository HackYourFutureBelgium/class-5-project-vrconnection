/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */

import React, { useContext, error, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Row, Col, Table,
  Image,
} from 'react-bootstrap';

import RefugeeRegister from './RefugeeRegister'
import profilePicture from '../../assets/images/refugee_help.jpg'
import { AuthContext } from '../Auth';
import API_URL from '../../api';

const RefugeeMyHelp = ({ setError }) => {
  const [volunteer, setVolunteer] = useState();
  const { registeredRefugee } = useContext(AuthContext);

  if (!volunteer && registeredRefugee) {
    axios.get(`${API_URL()}/volunteer`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((result) => {
        const { volunteers } = result.data;
        const findVolunteer = volunteers.find((user) => user._id === registeredRefugee.helpVolunteer);
        setVolunteer(findVolunteer)
      })
      .catch((err) => setVolunteer('no-register'));
  }

  if (registeredRefugee !== undefined) {
    return (
      <Row className="m-2">
        <Col sm={6}>
          <Container>
            <Image src={profilePicture} fluid />
          </Container>
        </Col>
        <Col sm={6}>
          <Container>
            <h1 className="pb-2">Volunteer who helps me.  </h1>
            <Table striped hover>
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{volunteer ? volunteer.name : null}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{volunteer ? volunteer.email : null}</td>
                </tr>
                <tr>
                  <th>City</th>
                  <td>{volunteer ? volunteer.city : null}</td>
                </tr>
                <tr>
                  <th>Age</th>
                  <td>{volunteer ? volunteer.age : null}</td>
                </tr>
                <tr>
                  <th>Gender</th>
                  <td>{volunteer ? volunteer.gender : null}</td>
                </tr>
                <tr>
                  <th> About Me</th>
                  <td>{volunteer ? volunteer.description : null}</td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Col>
      </Row>
    )
  } return (
    <RefugeeRegister setError={setError} error={error} />
  )
}

export default RefugeeMyHelp;
