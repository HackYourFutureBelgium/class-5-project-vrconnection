/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';
import app from './base';
import API_URL from '../api';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [registeredVolunteer, setRegisteredVolunteer] = useState();
  const [registeredRefugee, setRegisteredRefugee] = useState();

  if (!registeredVolunteer && currentUser && registeredVolunteer !== 'no-register') {
    axios.get(`${API_URL()}/volunteer`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((result) => {
        const { volunteers } = result.data;
        const volunteer = volunteers.find((user) => user.email === currentUser.email);
        setRegisteredVolunteer(volunteer)
      })
      .catch((error) => setRegisteredVolunteer('no-register'));
  }

  if (!registeredRefugee && currentUser && registeredRefugee !== 'no-register') {
    axios.get(`${API_URL()}/refugee`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((result) => {
        const refugees = result.data;
        const refugee = refugees.find((user) => user.email === currentUser.email);
        setRegisteredRefugee(refugee)
      })
      .catch((error) => setRegisteredRefugee('no-register'));
  }

  app.auth().onAuthStateChanged(setCurrentUser);
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        registeredVolunteer,
        registeredRefugee,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
