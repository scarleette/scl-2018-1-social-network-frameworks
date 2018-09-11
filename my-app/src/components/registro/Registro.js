import React, {Component} from 'react';
import Titulo from './Titulo';
import style from './style.css';
import Text from './Text';

class Registro extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className = 'title'>
          <Titulo  titulo= "Litle Pet Society"/>
          <Text texto = "Unete a nuestra comunidad"/>
        </div>
      </div>
    )
  }
}


export default Registro;