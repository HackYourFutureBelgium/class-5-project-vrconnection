/* eslint-disable no-underscore-dangle */
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
} from 'react-bootstrap';
import API_URL from '../../api';

/* const PaginationBasic = () => {
  const active = 1;
  const items = [];
  for (let number = 1; number <= 5; number += 1) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }
     // <PaginationBasic />
  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  )
} */

const VolunteerFindHelp = () => {
  const [refugeesInfo, setRefugeesInfo] = useState({ data: [], status: 'initialize' });
  if (refugeesInfo.status === 'initialize') {
    axios.get(`${API_URL()}/refugee`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((result) => setRefugeesInfo({ data: result.data, status: 'loaded' }))
  }
  console.log(refugeesInfo);
  return (
    <Container className="mb-4 pt-4">
      <Tab.Container id="list-group-tabs-example">
        <Row>
          <Col sm={4}>

            <ListGroup>
              {
                refugeesInfo.data.map((refugee) => {
                  const url = `#${refugee._id}`;
                  return (
                    <ListGroup.Item variant="secondary" action href={url} key={refugee._id}>
                      {refugee.firstName} {refugee.lastName}
                    </ListGroup.Item>
                  )
                })
              }
            </ListGroup>


          </Col>
          <Col sm={8}>
            <Tab.Content>
              {
                refugeesInfo.data.map((refugee) => {
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
    </Container>
  )
}

export default VolunteerFindHelp;
