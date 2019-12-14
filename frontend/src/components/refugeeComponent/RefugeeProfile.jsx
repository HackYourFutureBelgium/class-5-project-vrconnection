/* eslint-disable react/prop-types */

import React, { useContext, error } from 'react';
import {
  Container,
  Row, Col, Table,
  Image,
} from 'react-bootstrap';
import RefugeeRegister from './RefugeeRegister'
import profilePicture from '../../assets/images/refugees-volunteers-legal.jpg'
import { AuthContext } from '../Auth';

const RefugeeProfile = ({ setError }) => {
  const { registeredRefugee } = useContext(AuthContext);
  if (registeredRefugee !== undefined) {
    return (
      <Row className="m-2">
        <Col sm={6}>
          <Container>
            <Image src={profilePicture} roundedCircle />
          </Container>
        </Col>
        <Col sm={6}>
          <Container>
            <h1 className="pb-2">Refugee Profile </h1>
            <Table striped hover>
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{registeredRefugee.firstName} {registeredRefugee.lastName}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{registeredRefugee.email}</td>
                </tr>
                <tr>
                  <th>Country</th>
                  <td>{registeredRefugee.country}</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>{registeredRefugee.phoneNumber}</td>
                </tr>
                <tr>
                  <th>language</th>
                  <td>{registeredRefugee.language}</td>
                </tr>
                <tr>
                  <th>Need Help in</th>
                  <td>{registeredRefugee.description}</td>
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

export default RefugeeProfile;
