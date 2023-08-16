import React from 'react';
import './App.css';
const title = process.env.REACT_APP_TITLE




function App() {
  return (
    <div className="App">
    <h1>{title}</h1>
    <h3>{process.env.REACT_APP_DESCRIPTION}</h3>
    </div>
  );
}

export default App;
