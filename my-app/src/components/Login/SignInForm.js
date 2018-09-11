import React, {Component} from 'react';
import Registro from '../registro/Registro';

class SignInForm extends Component{
    constructor(){
        super();
    }
    render(){
        return
        <div>
            <input type="text"/>
            <input type="password"/>
            <button id='loginBtn'onClick={Registro}>Login</button>
            <button id='fbLogBtn' onClick={facebookLogin()}>Conectate con Facebook</button>
        </div>
    }
}
export default SignInForm