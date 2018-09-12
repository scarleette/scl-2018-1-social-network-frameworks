import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Titulo from '../registro/Titulo';
import Registro from '../registro/Registro';
import SignInForm from './SignInForm';



const Login = () =>{

        return (

        <Router>
            <div>
                <Titulo titulo="LittlePetSociety" />
                <SignInForm />
                <Link to="/registro">Registrate con Nosotros</Link>
                <Route path="/registro" component={Registro}></Route>
            </div>
        </Router>
        )
    }


export default Login;