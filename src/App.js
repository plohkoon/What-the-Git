/*global chrome */

import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const request = require('request');

function App() {

  const [subs, setSubs] = useState({});

  useEffect(() => {
    chrome.runtime.sendMessage({}, (res) => {
      console.log(res.data);
      setSubs(res.data);
    })
  }, [])

  return (
    <p>{JSON.stringify(subs)}</p>
  );
}

const ReactDefault = () => {
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
        <Link to='/'>Return to root</Link>
      </header>
    </div>
  )
}

export default App;
