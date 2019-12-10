/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Row,
  Col,
  ListGroup,
  Tab,
  Card,
  Badge,
  ButtonToolbar,
  Button,
} from 'react-bootstrap';
import API_URL from '../../api';

const PaginationValue = 7;

const PaginationBasic = ({ totalPagination, setPagination }) => {
  const maxPag = Math.ceil(totalPagination / PaginationValue);
  const items = [];
  for (let number = 1; number <= maxPag; number += 1) {
    items.push(
      <Button key={number} variant="outline-primary" onClick={() => (setPagination(number))}>
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

const VolunteerFindHelp = () => {
  const [refugeesInfo, setRefugeesInfo] = useState({ data: [], status: 'initialize' });
  const [pagination, setPagination] = useState(1);

  if (refugeesInfo.status === 'initialize') {
    axios.get(`${API_URL()}/refugee`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((result) => setRefugeesInfo({ data: result.data, status: 'loaded' }))
  }
  const defaultValue = refugeesInfo.status === 'loaded' ? `#${refugeesInfo.data[0]._id}` : null;
  console.log(defaultValue);
  return (
    <Container className="mb-4 pt-4">
      <Tab.Container id="list-group-tabs-example" defaultActiveKey={defaultValue}>
        <Row>
          <Col sm={4}>

            <ListGroup>
              {
                refugeesInfo.data.map((refugee, index) => {
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
                refugeesInfo.data.map((refugee, index) => {
                  const url = `#${refugee._id}`;
                  return (
                    <Tab.Pane eventKey={url} className="information" key={refugee._id}>
                      <Card>
                        <Card.Header> <h4>{refugee.firstName} {refugee.lastName} </h4></Card.Header>
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
        <PaginationBasic totalPagination={refugeesInfo.data.length} setPagination={setPagination} />
      </Tab.Container>
    </Container>
  )
}

export default VolunteerFindHelp;
