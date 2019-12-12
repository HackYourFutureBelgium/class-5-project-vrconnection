/* eslint-disable react/prop-types */
/* eslint-disable no-alert */

import React, { useCallback, useContext, useState } from 'react';
import { Redirect } from 'react-router';
import { Container } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import app from './base';
import { AuthContext } from './Auth';

const SignUp = () => {
  const [pass, setPass] = useState('');
  const [pass2, setPass2] = useState('');

  const handleSignUp = useCallback(async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  }, []);

  const handleOnchangePassword = (e) => {
    e.preventDefault();
    setPass(e.target.value);
  }
  const handleOnchangePassword2 = (e) => {
    e.preventDefault();
    setPass2(e.target.value);
  }

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return (<Redirect to="/" />);
  }
  const controlPass = (!(pass === pass2) || pass === '' || pass2 === '');
  return (
    <Container style={{ width: '28rem', height: '28rem', padding: '2rem' }}>
      <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="user_card user_card_signup">
            <div className="d-flex justify-content-center">
              <div className="brand_logo_container">
                <img
                  src={logo}
                  className="brand_logo"
                  alt="Logo"
                />
              </div>
            </div>
            <div className="mt-5">
              <div className="d-flex justify-content-center title">
                <b> SignUp</b>
              </div>
            </div>
            <div className="d-flex justify-content-center form_container">
              <form onSubmit={handleSignUp}>
                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <span className="input-group-text fas fa-user" />
                  </div>
                  <input
                    type="text"
                    name="email"
                    className="form-control input_user"
                    placeholder="email"
                  />
                </div>
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text fas fa-key" />
                  </div>
                  <input
                    type="password"
                    name="password"
                    className="form-control input_pass"
                    placeholder="password"
                    onChange={handleOnchangePassword}
                  />
                </div>
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text fas fa-key" />
                  </div>
                  <input
                    type="password"
                    name="password2"
                    className="form-control input_pass"
                    placeholder="Repeat-password"
                    onChange={handleOnchangePassword2}
                  />
                </div>

                <div className="d-flex justify-content-center mt-3 login_container">
                  <button disabled={controlPass} type="submit" name="button" className="btn login_btn">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
