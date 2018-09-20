import React, {Component} from 'react';
import Image from '../Perfil/Image';
import Text from '../Perfil/Text';
import Username from '../Perfil/Username';

class Perfil extends Component{
    constructor(){
        super();
    }
    render(){
        return(
        <div>
            <div>
            <Image />
            <Text />
            <Username />
            </div>
            
        </div>
        )
    }
}

export default Perfil