import React, { Component } from 'react';
import {Button, Icon} from 'react-materialize'




class Formulario extends Component {
  constructor() {
    super();

    this.state = [];
  }
  render() {
    return (
      <div>
        <div>
          <input type = "email" placeholder="Placeholder"/>
        </div><br/>
        <div>
          <input type = "password" placeholder="Placeholder"/>
        </div><br/>
        <div>
          <Button waves='light'><Icon>thumb_up</Icon>Registrate</Button>
        </div>
      </div>
    )
  }
}

export default Formulario;