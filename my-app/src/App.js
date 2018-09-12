import React, { Component } from 'react';
import './App.css';
import Registro from './components/registro/Registro';
import Login from '../src/components/Login/Login';
import Perfil from '../src/components/Perfil/Perfil';

class App extends Component {
  render() {
    return (
      <div>
          <Login />
          <Perfil />
      </div>
    );
  }
}

export default App;