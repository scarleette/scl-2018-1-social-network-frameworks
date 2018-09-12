import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import Email from '@material-ui/icons/Email';
import Lock from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';



class Formulario extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div>
          <Email/><Input type = "email" placeholder="Placeholder"/>
        </div><br/>
        <div>
          <Lock/><Input type = "password" placeholder="Placeholder"/>
        </div><br/>
        <div>
        <Button size="large">Registrate</Button>
        </div>
      </div>
    )
  }
}

export default Formulario;