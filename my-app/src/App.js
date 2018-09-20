import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import './App.css';
import Login from '../src/components/Login/Login';
import Perfil from '../src/components/Perfil/Perfil';
import Registro from '../src/components/registro/Registro';
import VistaMuro from '../src/components/Muro/VistaMuro';


class App extends Component {
  render() {
    return (
      <div>
        <div className = "Login">
        <Login/>
        </div>
        <div className = "registro">
          <Registro/>
        </div> 
        <div className = "muro">
          <VistaMuro/>
        </div>
        <div className = "Perfil">
        <Perfil />
        </div>
        

      </div>
    );
  }
}

export default App;