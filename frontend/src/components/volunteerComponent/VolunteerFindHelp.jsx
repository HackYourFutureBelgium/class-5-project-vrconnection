/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable object-shorthand */
/* eslint-disable no-nested-ternary */

import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Form,
  Row,
  Col,
  ListGroup,
  Tab,
  Card,
  Badge,
} from 'react-bootstrap';
import dateFormat from 'dateformat';
import PaginationBasic from './PaginationBasic';
import API_URL from '../../api';
import loading from '../../assets/images/load.gif';

const PaginationValue = 7;

const VolunteerFindHelp = () => {
  const [refugeesInfo, setRefugeesInfo] = useState({ data: [], status: 'initialize' });
  const [refugeesInfoFilter, setRefugeesInfoFilter] = useState([]);
  const [pagination, setPagination] = useState(1);

  const orderArray = (array) => array.sort((a1, b1) => {
    let a = a1; let b = b1;
    a = new Date(a.registeredDate);
    b = new Date(b.registeredDate);
    return a > b ? -1 : a < b ? 1 : 0;
  });

  const changeDataRefugeebyCategory = (e) => {
    e.preventDefault();
    const category = e.target.value;
    if (category === 'All') {
      setRefugeesInfoFilter(orderArray(refugeesInfo.data));
    } else {
      const filterArray = refugeesInfo.data.filter((element) => element.help.indexOf(category) >= 0);
      setRefugeesInfoFilter(orderArray(filterArray));
      setPagination(1);
    }
  }

  if (refugeesInfo.status === 'initialize') {
    axios.get(`${API_URL()}/refugee`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((result) => {
        setRefugeesInfo({ data: result.data, status: 'loaded' })
        setRefugeesInfoFilter(orderArray(result.data));
      })
  }
  if (refugeesInfo.status === 'loaded') {
    console.log(refugeesInfoFilter);
    return (
      <Container className="mb-4 pt-4">
        <Tab.Container>
          <Row>
            <Col sm={10}>
              <h2> Directory of Refugees:  </h2>
              <br />
            </Col>
          </Row>
        </Tab.Container>
        <Tab.Container>
          <Row>
            <Col sm={4}>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridHelp">
                    <Form.Label>Filter by Category:</Form.Label>
                    <Form.Control as="select" name="help" onChange={changeDataRefugeebyCategory}>
                      <option>All</option>
                      <option>shelter</option>
                      <option>healthcare</option>
                      <option>education</option>
                      <option>legal advice</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
              </Form>
            </Col>
          </Row>
        </Tab.Container>

        <Tab.Container id="list-group">
          <Row>
            <Col sm={4}>
              <ListGroup>
                {
                  refugeesInfoFilter.map((refugee, index) => {
                    const url = `#${refugee._id}`;
                    if (index >= (PaginationValue * (pagination - 1)) && index < (PaginationValue * pagination)) {
                      return (
                        <ListGroup.Item variant="secondary" action href={url} key={refugee._id}>
                          {refugee.firstName} {refugee.lastName}
                        </ListGroup.Item>
                      )
                    }
                    return null;
                  })
                }
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                {
                  refugeesInfoFilter.map((refugee) => {
                    const url = `#${refugee._id}`;
                    return (
                      <Tab.Pane eventKey={url} className="information" key={refugee._id}>
                        <Card>
                          <Card.Header> <h4>{refugee.firstName} {refugee.lastName} </h4> Register: {dateFormat(refugee.registeredDate, 'mmmm dS, yyyy - h:MM:ss TT')}
                          </Card.Header>
                          <Card.Body>
                            <Card.Text>
                              {
                                refugee.help.map((helpCategory) => (
                                  <Badge pill variant="secondary" key={helpCategory}> {helpCategory} </Badge>
                                ))
                              }
                            </Card.Text>
                            <Card.Title>My personal information</Card.Title>
                            <Card.Text>
                              Gender: {refugee.gender} <br />
                              Age:  {refugee.age}  <br />
                              Country: {refugee.country}  <br />
                              Language: {refugee.language}<br />
                              Email: {refugee.email}<br />
                              GSM: {refugee.phoneNumber}<br />
                            </Card.Text>
                            <Card.Title>In need help in </Card.Title>
                            <Card.Text>
                              {refugee.description}<br />
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Tab.Pane>
                    )
                  })
                }
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        
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

export default VolunteerFindHelp;
