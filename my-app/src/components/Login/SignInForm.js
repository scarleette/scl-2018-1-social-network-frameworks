import React, { Component } from 'react';
import {Row, Input, Button, Icon} from 'react-materialize';
import firebase from 'firebase';

class SignInForm extends Component{
	constructor(){
		super()
		this.state = {
			email : '',
			password : ''
		}
	}
	render(){
		return(
			<Row>
				<Input type="email" label="Email" s={12} />
				<Input type="password" label="Password" s={12} />
				<Button waves='light'>Log In <Icon left>send</Icon></Button>
			</Row>
		
	)
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// ...
	});
	}
	
}



export default SignInForm;
