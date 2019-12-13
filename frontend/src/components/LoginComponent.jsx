/* eslint-disable react/prop-types */
/* eslint-disable no-alert */

import React, { useCallback, useContext } from 'react';
import { Redirect } from 'react-router';
import { Container } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import app from './base';
import { AuthContext } from './Auth';

const LoginComponent = () => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
      } catch (error) {
        alert('Sorry your not register yet or your password is wrong!..');
      }
    },
    [],
  );
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return (<Redirect to="/" />);
  }

  return (
    <Container style={{ width: '28rem', height: '28rem', padding: '2rem' }}>
      <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="user_card">
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
                <b> Log-in</b>
              </div>
            </div>
            <div className="d-flex justify-content-center form_container">
              <form onSubmit={handleLogin}>
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
                  />
                </div>

                <div className="d-flex justify-content-center mt-3 login_container">
                  <button type="submit" name="button" className="btn login_btn">Login</button>
                </div>
              </form>
            </div>
            <div className="mt-4">
              <div className="d-flex justify-content-center links">
                <a href="/SignUp" className="ml-2">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default LoginComponent;
