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
import ErrorComponent from './ErrorComponent';
import RefugeeEditProfile from './refugeeComponent/RefugeeEditProfile';
import VolunteerEditProfile from './volunteerComponent/VolunteerEditProfie';
import OrganizationsComponent from './OrganazationsComponent';
import DeleteRefugee from './refugeeComponent/DeleteRefugee';
import DeleteVolunteer from './volunteerComponent/DeleteVolunteer';

const Layout = () => {
  const [error, setError] = useState();
  return (
    <AuthProvider>
      <Router>
        <Row>
          <Col lg={12}><Menu /></Col>
        </Row>
        <Row>
          {error ? <ErrorComponent error={error} /> : (
            <Switch>
              <Route exact path="/refugees/signup">
                <Col sm={12}><RefugeeRegister setError={setError} /></Col>
              </Route>
              <Route exact path="/refugees/profile">
                <Col sm={12}><RefugeeProfile setError={setError} /></Col>
              </Route>
              <Route exact path="/refugees/edit">
                <Col sm={12}><RefugeeEditProfile setError={setError} /></Col>
              </Route>
              <Route exact path="/refugees/delete">
                <Col sm={12}><DeleteRefugee setError={setError} /></Col>
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
              <Route exact path="/volunteers/edit">
                <Col sm={12}><VolunteerEditProfile setError={setError} /></Col>
              </Route>
              <Route exact path="/volunteers/delete">
                <Col sm={12}><DeleteVolunteer setError={setError} /></Col>
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
              <Route path="/">
                <Row
                  className="ml-1"
                  style={{ marginTop: '2%' }}
                >
                  <Col sm={6}><About /></Col>
                  <Col sm={6}><Aside /></Col>
                </Row>
                <Row>
                  <Col lg={12} className="ml-1"><OrganizationsComponent /></Col>
                </Row>
              </Route>
            </Switch>
          )}
        </Row>
        <Row>
          <Col sm={12}><Footer /> </Col>
        </Row>
      </Router>
    </AuthProvider>
  )
};

export default Layout;
