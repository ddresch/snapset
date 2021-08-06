import React from 'react';
import logo from './logo.svg';
import './App.css';
import Camera from './components/camera'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Camera />
    </div>
  );
}

export default App;
