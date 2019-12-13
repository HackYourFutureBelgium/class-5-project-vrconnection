/* eslint-disable object-shorthand */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */

import React, { useState, useContext } from 'react';
import axios from 'axios';
import {
  Container,
  Row,
  Col,
  Tab,
} from 'react-bootstrap';

import PaginationBasic from './PaginationBasic';
import VolunteerRegister from './VolunteerRegister';
import VolunteerListOfHelp from './VolunteerListOfHelp';
import API_URL from '../../api';
import loading from '../../assets/images/load.gif';
import { AuthContext } from '../Auth';

const PaginationValue = 7;

const VolunteerHistory = () => {
  const [refugeesInfo, setRefugeesInfo] = useState({ data: [], status: 'initialize' });
  const [refugeesInfoFilter, setRefugeesInfoFilter] = useState([]);
  const [pagination, setPagination] = useState(1);
  const { registeredVolunteer } = useContext(AuthContext);

  const orderArray = (array) => array.sort((a1, b1) => {
    let a = a1; let b = b1;
    a = new Date(a.registeredDate);
    b = new Date(b.registeredDate);
    return a > b ? -1 : a < b ? 1 : 0;
  });

  if (registeredVolunteer !== undefined) {
    if (refugeesInfo.status === 'initialize') {
      axios.get(`${API_URL()}/refugee`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((result) => {
          setRefugeesInfo({ data: result.data, status: 'loaded' })
          setRefugeesInfoFilter(orderArray(result.data.filter((refugee) => refugee.helpStatus === true && refugee.helpVolunteer === registeredVolunteer._id)));
        })
    }
    if (refugeesInfo.status === 'loaded') {
      return (
        <Container className="mb-4 pt-4">
          <Tab.Container>
            <Row>
              <Col sm={10}>
                <h2> My history of Help:  </h2>
                <br />
              </Col>
            </Row>
          </Tab.Container>

          <VolunteerListOfHelp PaginationValue={PaginationValue} pagination={pagination} refugeesInfoFilter={refugeesInfoFilter} setRefugeesInfo={setRefugeesInfo} />
          <Tab.Container>
            <Row>
              <Col sm={10}>
                <br />
                <PaginationBasic totalPagination={refugeesInfoFilter.length} setPagination={setPagination} PaginationValue={PaginationValue} pagination={pagination} />
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      )
    }
    return (
      <Container className="mb-8 pt-8">
        <img src={loading} alt="loadin" />
      </Container>
    )
  }
  return (
    <VolunteerRegister />
  )
}

export default VolunteerHistory;
