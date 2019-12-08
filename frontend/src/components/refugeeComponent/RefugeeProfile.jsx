import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  Container,
  Row, Col, Table,
  Image,
} from 'react-bootstrap';
import API_URL from '../../api';
import profilePicture from '../../assets/images/refugee.jpg'

const RefugeeProfile = () => {
  const { id } = useParams();
  const [refugee, setRefugee] = useState(null);

  axios
    .get(`${API_URL('dev')}/refugee`)
    .then((response) => setRefugee(response))
    .catch((err) => console.log(err));

  return (
    <Row>
      <Col sm={6}>
        <Container>
          <Image src={profilePicture} roundedCircle />
        </Container>
      </Col>
      <Col sm={6}>
        <Table striped hover>
          <tbody>
            <tr>
              <th>Need Help in</th>
              <td>@mdo</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>@mdo</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>@mdo</td>
            </tr>
            <tr>
              <th>Country</th>
              <td>@mdo</td>
            </tr>
            <tr>
              <th>language</th>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  )
}

export default RefugeeProfile;
