import React, {Component} from 'react';

class SignInForm extends Component{
    constructor(){
        super();

    }
    render(){
        return(
            <div>
                <input type="text"/>
                <input type="password"/>
                <button id='loginBtn'>Login</button>
                <button id='fbLogBtn'>Conectate con Facebook</button>
             </div>
        )
        
    
        
    }
}


export default SignInForm