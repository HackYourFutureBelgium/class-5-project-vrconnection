import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SubmitConfirmation = () => (
  <Modal show animation={false}>
    <Modal.Header>
      <Modal.Title>Registered Successfully</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Thank you for Registering
    </Modal.Body>
    <Modal.Footer>
      <Link to="/" className="btn btn-primary">OK</Link>
    </Modal.Footer>
  </Modal>
);

export default SubmitConfirmation;
