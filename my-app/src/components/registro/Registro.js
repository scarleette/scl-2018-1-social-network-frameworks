import React, {Component} from 'react';
import Titulo from './Titulo';
import style from './style.css';
import Text from './Text';
import Formulario from './Formulario';

class Registro extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className = 'title'>
        <p>Holaaa Registro</p>
          <Titulo  titulo= "Little Pet Society"/>
          <Text texto = "Unete a nuestra comunidad"/>
        </div>
        <div className = 'registro'>
          <Formulario/>
        </div>
      </div>
    )
  }
}


export default Registro;