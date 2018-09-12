import React, {Component} from 'react';
import Titulo from '../registro/Titulo';
import Link from './Link';

class Login extends Component {
    constructor(){
        super();
    }
    render(){
        return
        <div>
            <Titulo titulo="LittlePetSociety" />
            <Link />
        </div>
    }
}

export default Login;