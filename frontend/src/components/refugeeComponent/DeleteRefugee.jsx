/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */

import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { Container, Modal, Button } from 'react-bootstrap';
import API_URL from '../../api';
import { AuthContext } from '../Auth';

const DeleteRefugee = ({ setError }) => {
  const [deleted, setDeleted] = useState(false);
  const { registeredRefugee } = useContext(AuthContext);

  if (registeredRefugee === undefined) {
    return (<h1>loading ...</h1>)
  }

  const id = registeredRefugee._id;

  const handleDelete = async () => {
    try {
      await axios.delete(`${API_URL()}/refugee/${id}`)
    } catch (error) {
      setError(error)
    }
    setDeleted(true)
  };

  return (
    <Container>
      <Modal show>
        <Modal.Header>
          <Modal.Title>Are You Sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your Data will be removed permanently</Modal.Body>
        <Modal.Footer>
          <Link to="/refugees/profile" className="btn btn-light">cancel</Link>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      {deleted ? <Redirect to="/" /> : null}
    </Container>
  );
}

export default DeleteRefugee;
