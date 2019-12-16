/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */

import React from 'react';

const ErrorComponent = ({ error }) => (
  <pre>{error.message}</pre>
)

export default ErrorComponent;
