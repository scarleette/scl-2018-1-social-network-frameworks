import React, { Component } from 'react';
import './App.css';
import Titulo from './components/registro/Titulo';
import Registro from './components/registro/Registro'

class App extends Component {
  render() {
    return (
      <div>
        <Registro/>
      </div>
    );
  }
}

export default App;