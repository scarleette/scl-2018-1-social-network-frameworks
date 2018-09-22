import React, {Component} from 'react';
import Carrusel from '../Common/Carrusel';
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
				<Carrusel />
				<Text />
				<Username />
			</div>
				
		</div>
		)
	}
}

export default Perfil;
