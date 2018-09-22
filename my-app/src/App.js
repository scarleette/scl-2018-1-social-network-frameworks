import React, { Component } from 'react';
import './App.css';
// import Login from '../src/components/Login/Login';
import Registro from './components/registro/Registro';
// import VistaMuro from './components/Muro/VistaMuro';
// import Perfil from '../src/components/Perfil/Perfil';


class App extends Component {
  render() {
    return (
      <div>
        <div className = "Login">
          {/* <Login/> */}
        </div>
        <div className = "registro">
          <Registro/>
        </div>
        <div>
          {/* <Perfil/> */}
        </div>
        <div className = "muro">
          {/* <VistaMuro/> */}
        </div>
    </div>
    );
  }
}

export default App;