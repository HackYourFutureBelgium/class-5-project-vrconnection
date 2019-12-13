/* eslint-disable react/prop-types */

import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SubmitConfirmationVolunteerHelp = ({ setRefugeesInfo }) => {
  const handleAccept = () => setRefugeesInfo({ status: 'initialize' });
  return (
    <Modal show animation={false}>
      <Modal.Header>
        <Modal.Title>Thanks for your help.</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        The refugee infor was added to your history.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleAccept}>Accept</Button>
      </Modal.Footer>
    </Modal>
  )
};

export default SubmitConfirmationVolunteerHelp;
