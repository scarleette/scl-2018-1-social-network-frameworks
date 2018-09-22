import React, { Component } from 'react';
import {Row, Input, Button, Icon} from 'react-materialize';
import firebase from '../../firebase/firebase';

class SignInForm extends Component{
	constructor(){
		super();

		this.state = {
			email : '',
			password : ''
		}
	
		firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
		.then( user => {

			Location.href = '../perfil/perfil.js';

		})
		.catch(function(error) {

			console.log(error);
		});
		
	}
	render(){
		return(
			<div>
				<Row>
					<Input type="email" label="Email" s={12} value = {this.state.email} />
					<Input type="password" label="Password" s={12} value = {this.state.password} />
					<Button waves='light'>Log In <Icon left>send</Icon></Button>
				</Row>
			</div>
		)
	}
}

export default SignInForm;
