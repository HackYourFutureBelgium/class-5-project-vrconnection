/* eslint-disable react/prop-types */

import React from 'react';
import {
  ButtonToolbar,
  Button,
} from 'react-bootstrap';

const PaginationBasic = ({
  totalPagination,
  setPagination,
  PaginationValue,
  pagination,
}) => {
  const maxPag = Math.ceil(totalPagination / PaginationValue);
  const items = [];
  for (let number = 1; number <= maxPag; number += 1) {
    const type = number === pagination ? 'primary' : 'outline-primary';
    items.push(
      <Button key={number} variant={type} onClick={() => (setPagination(number))}>
        {number}
      </Button>,
    );
  }

  return (
    <div>
      <ButtonToolbar>{items}</ButtonToolbar>
    </div>
  )
}

export default PaginationBasic;
