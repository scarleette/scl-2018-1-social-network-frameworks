import React, { Component } from 'react';
import {Button, Icon, Input, Row, Col} from 'react-materialize';
import firebase from '../../firebase/firebase';


class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      email: '',
      password: ''

    }

  this.handleChange = this.handleChange.bind(this);
  this.usuarioLogueado = this.usuarioLogueado.bind(this);

  }
 
  render() {
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
  usuarioLogueado(event) {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
		.then((user)=>
			
			{console.log(user)})

    .catch((error) => {
			
        console.log(error);
      })
	}

  		handleChange(e) {
  		this.setState({ [e.target.name]: e.target.value });
  }
};

export default SignInForm ;

