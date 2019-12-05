import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import logo from '../assets/images/logo.png';

const LoginComponent = () => {
  const [loggedIn, setLoggedIn] = useState(false);

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
            <div className="d-flex justify-content-center form_container">
              <form>
                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <span className="input-group-text fas fa-user" />
                  </div>
                  <input
                    type="text"
                    name="email"
                    className="form-control input_user"
                    placeholder="username"
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
                <a href="/register" className="ml-2">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default LoginComponent;
