import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import RefugeeRegistration from './components/RefugeeRegistration';
import VolunteerRegistration from './components/VolunteerRegistration';
import MainNavbar from './components/MainNavbar';
import API_URL from './api';

const HELLO_ENDPOINT = `${API_URL()}/hello`;

function App() {
  const [greeting, setGreeting] = useState();

  useEffect(() => {
    fetch(HELLO_ENDPOINT)
      .then(res => res.json())
      .then(val => setGreeting(val.greeting));
  });

  return (
    <Router>
      <div className="App">
        <MainNavbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/RefugeeRegistration" component={RefugeeRegistration} />
        <Route exact path="/VolunteerRegistration" component={VolunteerRegistration} />
        <p>{greeting}</p>
      </div>
    </Router>
  );
}

export default App;
