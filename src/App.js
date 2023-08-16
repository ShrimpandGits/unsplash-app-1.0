import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>{process.env.REACT_APP_TITLE}</h1>
    <h3>{process.env.REACT_APP_DESCRIPTION}</h3>
    </div>
  );
}

export default App;
