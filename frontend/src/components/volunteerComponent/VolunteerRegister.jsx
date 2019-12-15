import React, { useState } from 'react';
import VolunteerRegistrationForm from './VolunteerRegistrationForm';

function VolunteerRegistration() {
  const [formVolunteer, setFormVolunteer] = useState({ error: 1 });
  return (
    <VolunteerRegistrationForm formVolunteer={formVolunteer} setFormVolunteer={setFormVolunteer} />
  )
}

export default VolunteerRegistration;
