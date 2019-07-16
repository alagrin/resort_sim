import React from 'react';
import Form from './components/Form';
import Visuals from './components/Visuals'
import logo from './logo.svg';
import './App.css';

//See if need to pull in props or other data in here

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form />
      </header>
      <Visuals />
    </div>
  );
}

export default App;
