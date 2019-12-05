import React, { useState, useEffect } from 'react';
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
    <p>{ greeting }</p>
  );
}

export default App;
