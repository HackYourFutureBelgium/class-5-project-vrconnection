import React from 'react'
import { Row, Col } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Menu from './Menu';
import About from './About';
import Aside from './Aside';
import Footer from './Footer';
import LoginComponent from './LoginComponent';

const Layout = () => (
  <Router>
    <Row>
      <Col lg={12}><Menu /></Col>
    </Row>
    <Switch>
      <Row>
        <Route path="/" exact>
          <Col sm={6}><About /></Col>
          <Col sm={6}><Aside /></Col>
        </Route>
        <Route path="/refugees/signup" exact>
          <Col sm={12}>Refugee Registration</Col>
        </Route>
        <Route path="/refugees/profile" exact>
          <Col sm={12}>Refugee Profile</Col>
        </Route>
        <Route path="/volunteers/signup" exact>
          <Col sm={12}>Volunteer Registration</Col>
        </Route>
        <Route path="/volunteers/profile" exact>
          <Col sm={12}>Volunteer Profile</Col>
        </Route>
        <Route path="/login" exact>
          <Col sm={12}><LoginComponent /></Col>
        </Route>
      </Row>
    </Switch>
    <Row>
      <Col sm={12}><Footer /> </Col>
    </Row>
  </Router>
);

export default Layout;
