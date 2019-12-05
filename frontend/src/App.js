import React, { useState, useEffect } from 'react';
import './assets/App.css';
import API_URL from './api';
import Layout from './components/Layout';

const HELLO_ENDPOINT = `${API_URL()}/hello`;

function App() {
  const [greeting, setGreeting] = useState();

  useEffect(() => {
    fetch(HELLO_ENDPOINT)
      .then((res) => res.json())
      .then((val) => setGreeting(val.greeting));
  });

  return (
    <Layout />
  );
}

export default App;
