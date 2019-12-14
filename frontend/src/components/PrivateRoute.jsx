/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable  no-extra-boolean-cast */

import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import { AuthContext } from './Auth';
import LoginComponent from './LoginComponent';

const PrivateRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return (<Col sm={12}><LoginComponent /></Col>);
  }
  return (
    <>{children} </>
  )
};

export default PrivateRoute
