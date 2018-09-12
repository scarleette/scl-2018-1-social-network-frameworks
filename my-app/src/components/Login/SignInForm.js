import React, {Component} from 'react';
import Registro from '../registro/Registro';

class SignInForm extends Component{
    constructor(){
        super();

        this.state = {
            status:''
        }
    }
    render(){
        return(
            <div>
                <input type="text"/>
                <input type="password"/>
                <button id='loginBtn'onClick={this.firebaseLogin.bind(this)}>Login</button>
                <button id='fbLogBtn' onClick={facebookLogin()}>Conectate con Facebook</button>
             </div>
        )
    }
    firebaseLogin(){
        console.log(this.state);
        
    }
}


export default SignInForm