/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import app from './base';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  app.auth().onAuthStateChanged(setCurrentUser);
  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
