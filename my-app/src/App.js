import React, { Component } from 'react';
import './App.css';
import Titulo from './componentes/registro/Titulo';
import Registro from './componentes/registro/Registro'

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