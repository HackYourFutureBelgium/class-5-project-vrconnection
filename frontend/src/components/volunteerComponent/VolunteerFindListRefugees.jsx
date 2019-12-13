/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-indent */
import React, { useContext, useState } from 'react';
import axios from 'axios';
import dateFormat from 'dateformat';
import useForm from 'react-hook-form';
import {
  Row,
  Col,
  ListGroup,
  Tab,
  Card,
  Badge,
  Form,
  Button,
} from 'react-bootstrap';
import { AuthContext } from '../Auth';
import SubmitConfirmationVolunteerHelp from './SubmitConfirmationVolunteerHelp';
import API_URL from '../../api';

const VolunteerFindListRefugees = ({
  PaginationValue,
  pagination,
  refugeesInfoFilter,
  setRefugeesInfo,
}) => {
  const { register, handleSubmit } = useForm();
  const { registeredVolunteer } = useContext(AuthContext);
  const [updateRefugee, setUpdateRefugee] = useState(false);
  const onSubmit = ({
    volunterId,
    refugeeId,
  }) => {
    const helpStatus = true;
    const helpVolunteer = volunterId;
    axios
      .patch(
        `${API_URL()}/refugee/${refugeeId}`,
        {
          helpStatus,
          helpVolunteer,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then((result) => setUpdateRefugee(true))
      .catch((err) => {
        setUpdateRefugee(false);
      });
  };

  return (
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
                        <Card.Title>Can you help?  </Card.Title>
                        <Card.Text>
                          If you can help, Clic in the next button and the information will be save in your history:
                        </Card.Text>
                        <Card.Title>
                          <Form onSubmit={handleSubmit(onSubmit)}>
                            <input name="volunterId" type="hidden" value={registeredVolunteer._id} ref={register({ required: true })} />
                            <input name="refugeeId" type="hidden" value={refugee._id} ref={register({ required: true })} />
                            <Button disabled={refugee.helpStatus} type="submit" className="btn btn-primary mx-auto d-block mt-4">
                              Help
                            </Button>
                          </Form>
                          {updateRefugee ? <SubmitConfirmationVolunteerHelp setRefugeesInfo={setRefugeesInfo} /> : null}
                        </Card.Title>
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
  )
}

export default VolunteerFindListRefugees;
