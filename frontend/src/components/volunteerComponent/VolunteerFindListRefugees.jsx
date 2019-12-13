/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable  import/no-unresolved */
/* eslint-disable  object-curly-newline,arrow-parens,operator-linebreak */

import React from 'react';
import dateFormat from 'dateformat';
import { Row, Col, ListGroup, Tab, Card, Badge } from 'react-bootstrap';

const VolunteerFindListRefugees = ({ PaginationValue, pagination, refugeesInfoFilter }) => (
  <Tab.Container id="list-group">
    <Row>
      <Col sm={4}>
        <ListGroup>
          {refugeesInfoFilter.map((refugee, index) => {
            const url = `#${refugee._id}`;
            if (
              index >= PaginationValue * (pagination - 1) &&
              index < PaginationValue * pagination
            ) {
              return (
                <ListGroup.Item variant="secondary" action href={url} key={refugee._id}>
                  {refugee.firstName} {refugee.lastName}
                </ListGroup.Item>
              );
            }
            return null;
          })}
        </ListGroup>
      </Col>
      <Col sm={8}>
        <Tab.Content>
          {refugeesInfoFilter.map(refugee => {
            const url = `#${refugee._id}`;
            return (
              <Tab.Pane eventKey={url} className="information" key={refugee._id}>
                <Card>
                  <Card.Header>
                    {' '}
                    <h4>
                      {refugee.firstName} {refugee.lastName}{' '}
                    </h4>{' '}
                    Register: {dateFormat(refugee.registeredDate, 'mmmm dS, yyyy - h:MM:ss TT')}
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      {refugee.help.map(helpCategory => (
                        <Badge pill variant="secondary" key={helpCategory}>
                          {' '}
                          {helpCategory}{' '}
                        </Badge>
                      ))}
                    </Card.Text>
                    <Card.Title>My personal information</Card.Title>
                    <Card.Text>
                      Gender: {refugee.gender} <br />
                      Age: {refugee.age} <br />
                      Country: {refugee.country} <br />
                      Language: {refugee.language}
                      <br />
                      Email: {refugee.email}
                      <br />
                      GSM: {refugee.phoneNumber}
                      <br />
                    </Card.Text>
                    <Card.Title>In need help in </Card.Title>
                    <Card.Text>
                      {refugee.description}
                      <br />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Tab.Pane>
            );
          })}
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
);

export default VolunteerFindListRefugees;
