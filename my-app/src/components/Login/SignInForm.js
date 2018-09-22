import React, { Component } from 'react';
import {Row, Input, Button, Icon, Col} from 'react-materialize';
import firebase from 'firebase';

class SignInForm extends Component{
	constructor(props){
		super(props);

		this.state = {
			email: '',
			password: ''
		}	
	}

	render(){
		return(
			<div>
				<Row>
				<Input s={12} value={this.state.email} onChange={this.handleChange.bind(this)} type="email" name="email" placeholder="Email"><Icon>account_circle</Icon></Input>
            <Input s={12} value={this.state.password} onChange={this.handleChange.bind(this)} type="password" name="password"  placeholder="Password"><Icon >lock</Icon></Input>
					<Button waves='light' onClick = {this.cambioVista}>Log In <Icon left>send</Icon></Button>
				</Row>
			</div>
		)
	}
	handleChange(e) {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
		firebase.auth().signInWithEmailAndPassword(e.state.email, e.state.password)
		.then(result => {
			console.log('hola estas regustrado' + result);
		})
		.catch(function(error) {
			console.log(error);
		});
	}
}

export default SignInForm;
