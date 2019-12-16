/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable object-curly-newline */
/* eslint-disable no-lone-blocks */

import React, { useContext } from 'react';
import { Container, Row, Col, Table, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth';
import VolunteerRegister from './VolunteerRegister';
import profilePicture from '../../assets/images/volunteer_profile_banner.jpg';

const VolunteerProfile = () => {
  const { registeredVolunteer } = useContext(AuthContext);
  if (registeredVolunteer !== undefined) {
    return (
      <Row className="m-2">
        <Col sm={6}>
          <Container>
            <Image src={profilePicture} fluid />
          </Container>
        </Col>
        <Col sm={6}>
          <Container>
            <h1 className="pb-2">Volunteer Profile </h1>
            <Table striped hover>
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{registeredVolunteer.name}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{registeredVolunteer.age}</td>
                </tr>
                <tr>
                  <th>Gender</th>
                  <td>{registeredVolunteer.gender}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{registeredVolunteer.email}</td>
                </tr>
                <tr>
                  <th>City</th>
                  <td>{registeredVolunteer.city}</td>
                </tr>
                <tr>
                  <th>Volunteering</th>
                  <td>{registeredVolunteer.help}</td>
                </tr>
                <tr>
                  <th>Registered Date</th>
                  <td>{registeredVolunteer.registeredDate}</td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Col>
        <Link to="/volunteers/edit" className="btn btn-primary">
          Edit Profile
        </Link>
      </Row>
    );
  }
  return <VolunteerRegister />;
};
export default VolunteerProfile;
