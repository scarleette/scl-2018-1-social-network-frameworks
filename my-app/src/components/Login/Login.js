import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Titulo from '../registro/Titulo';
import Registro from '../registro/Registro';
import SignInForm from './SignInForm';



const Login = () =>{
<<<<<<< HEAD

	return (

=======
	return (
>>>>>>> f275c03021bae4935220da39b98bc62e743c7557
		<Router>
			<div>
				<Titulo titulo="Little Pet Society" />
				<SignInForm />
				<Link to="/registro">Registrate con Nosotros</Link>
				<Route path="/registro" component={Registro}></Route>   
			</div>
		</Router>
	)
<<<<<<< HEAD
    }
=======
};
>>>>>>> f275c03021bae4935220da39b98bc62e743c7557


export default Login;