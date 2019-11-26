import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import API_URL from './api';

const HELLO_ENDPOINT = `${API_URL()}/hello`;

function App() {
  const [greeting, setGreeting] = useState();

  useEffect(() => {
    fetch(HELLO_ENDPOINT)
      .then((res) => res.json())
      .then((val) => setGreeting(val.greeting));
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{greeting}</p>
      </header>
    </div>
  );
}

export default App;
