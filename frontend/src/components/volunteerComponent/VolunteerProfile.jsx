import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { AuthContext } from '../Auth';
import VolunteerRegister from './VolunteerRegister';

const VolunteerProfile = () => {
  const { registeredVolunteer } = useContext(AuthContext);
  if (registeredVolunteer !== undefined) {
    return (
      <Container className="mb-4 mt-4">
        <h1>This is Volunteer Profile</h1>
      </Container>
    )
  }
  return (
    <VolunteerRegister />
  )
}

export default VolunteerProfile;
