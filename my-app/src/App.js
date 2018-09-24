import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './App.css';
import Login from '../src/components/Login/Login';
import Registro from './components/registro/Registro';
import VistaMuro from './components/Muro/VistaMuro';
import Perfil from '../src/components/Perfil/Perfil';
import VistaBuscador from './components/BuscadorDeClinicas/VistaBuscador';


class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div>
        <div className = "Login">
          <Login/>
        </div>
        <div className = "registro">
          <Registro/>
        </div>
        <div>
          <Perfil/>
        </div>
        <div className = "muro">
          <VistaMuro/>
        </div>
        <div>
          <VistaBuscador/>
        </div>
        
    </div>
=======
      
        <Router>
          <div>
          <Route exact path="/" component={Login}/>
          <Route path="/registro" component={Registro}/>
          <Route path="/perfil" component={Perfil}/>
          <Route path="/muro" component={VistaMuro}/>
          <Route path="/registro" component={Registro}/>
          </div>
        </Router>
      
    
>>>>>>> 656b1ab334d70c05216a31626ed1c1f25125060a
    );
  }
}

export default App;