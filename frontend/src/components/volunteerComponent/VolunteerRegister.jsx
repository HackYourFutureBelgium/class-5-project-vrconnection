import React, { useState } from 'react';
import VolunteerRegistrationForm from './VolunteerRegistrationForm';
import VolunteerRegistrationAdded from './VolunteerRegistrationAdded';

function VolunteerRegistration() {
  const [formVolunteer, setFormVolunteer] = useState({ error: 1 });
  return formVolunteer.error === 1 ? (
    <VolunteerRegistrationForm formVolunteer={formVolunteer} setFormVolunteer={setFormVolunteer} />
  ) : (
    <VolunteerRegistrationAdded formVolunteer={formVolunteer} />
  );
}

export default VolunteerRegistration;
