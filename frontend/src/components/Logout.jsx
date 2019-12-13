import React from 'react';
import app from './base';

const Logout = () => (
  <>
    <h1>LogOut</h1>
    <button type="button" onClick={() => app.auth().signOut()}>Sign out</button>
  </>
);

export default Logout;
