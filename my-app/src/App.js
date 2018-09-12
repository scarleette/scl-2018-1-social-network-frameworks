import React, { Component } from 'react';
import './App.css';
import Registro from './components/registro/Registro';
import Login from '../src/components/Login/Login';

class App extends Component {
  render() {
    return (
      <div>
          <Login />
      </div>
    );
  }
}

export default App;