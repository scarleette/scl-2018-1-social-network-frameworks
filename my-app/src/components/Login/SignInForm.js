import React, { Component } from 'react';
<<<<<<< HEAD
=======
import {Redirect,withRouter} from 'react-router-dom';
>>>>>>> 656b1ab334d70c05216a31626ed1c1f25125060a
import {Button, Icon, Input, Row} from 'react-materialize';
import firebase from '../../firebase/firebase';
import Perfil from '../Perfil/Perfil';
import Login from './Login';


class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      email: '',
      password: '',
      usuarioLogueado: null

    }

  this.handleChange = this.handleChange.bind(this);
  this.usuarioLogueado = this.usuarioLogueado.bind(this);

  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
}
usuarioLogueado(event) {
  event.preventDefault();
  firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
    
      console.log(error);
    })
}

 
  render() {
      if (this.state.usuarioLogueado !== null){
        return <Redirect to='/perfil' />
      }
    return (
      <div>
        <Row>
            <Input s={12} value={this.state.email} onChange={this.handleChange} type="email" name="email" placeholder="Email"><Icon>account_circle</Icon></Input>
            <Input s={12} value={this.state.password} onChange={this.handleChange} type="password" name="password"  placeholder="Password"><Icon >lock</Icon></Input>
        </Row>
        
          <div className = "button">
            <center><Button waves='light' onClick={this.usuarioLogueado}><Icon left>send</Icon>Log In </Button></center>
          </div>
      </div>
    )
  }
 

  		
};

export default withRouter(SignInForm) ;

