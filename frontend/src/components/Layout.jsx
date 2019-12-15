import React, { useState } from 'react'
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
import SignUp from './SignUp';
import { AuthProvider } from './Auth';
// import PrivateRoute from './PrivateRoute';
import RefugeeRegister from './refugeeComponent/RefugeeRegister';
import RefugeeProfile from './refugeeComponent/RefugeeProfile';
import RefugeeMyHelp from './refugeeComponent/RefugeeMyHelp';
import VolunteerHistory from './volunteerComponent/VolunteerHistory';
import VolunteerRegister from './volunteerComponent/VolunteerRegister';
import VolunteerProfile from './volunteerComponent/VolunteerProfile';
import VolunteerFindHelp from './volunteerComponent/VolunteerFindHelp';
import Faq from './FaqPage/Faq';
import Services from './Organisation/Services'

const Layout = () => {
  const [error, setError] = useState();
  return (
    <AuthProvider>
      <Router>
        <Row>
          <Col lg={12}><Menu /></Col>
        </Row>
        <Row>
          <Switch>
            <Route exact path="/refugees/signup">
              <Col sm={12}><RefugeeRegister setError={setError} error={error} /></Col>
            </Route>
            <Route exact path="/refugees/profile">
              <Col sm={12}><RefugeeProfile setError={setError} error={error} /></Col>
            </Route>
            <Route exact path="/refugees/myHelp">
              <Col sm={12}><RefugeeMyHelp /></Col>
            </Route>
            <Route exact path="/volunteers/signup">
              <Col sm={12}><VolunteerRegister /></Col>
            </Route>
            <Route exact path="/volunteers/profile">
              <Col sm={12}><VolunteerProfile /></Col>
            </Route>
            <Route exact path="/volunteers/findHelp">
              <Col sm={12}><VolunteerFindHelp /></Col>
            </Route>
            <Route exact path="/volunteers/history">
              <Col sm={12}><VolunteerHistory /></Col>
            </Route>
            <Route exact path="/login">
              <Col sm={12}><LoginComponent /></Col>
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/faq">
              <Faq />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route path="/">
              <Col sm={6}><About /></Col>
              <Col sm={6}><Aside /></Col>
            </Route>
          </Switch>
        </Row>
        <Row>
          <Col sm={12}><Footer /> </Col>
        </Row>
      </Router>
    </AuthProvider>
  )
};

export default Layout;
