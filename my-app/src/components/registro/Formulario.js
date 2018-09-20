import React, { Component } from 'react';
import {Button, Icon, Input, Row} from 'react-materialize'




class Formulario extends Component {
  constructor() {
    super();

    this.state = [];
  }
  render() {
    return (
      <div>
        <Row>
          <Input placeholder = "First Name" s={12} label="First Name"><Icon>perm_identity</Icon></Input>
          <Input placeholder = "Last Name"s={12} label="Last Name"><Icon>perm_identity</Icon></Input>
          <Input label="Email" s={12}><Icon>mail_outline</Icon></Input>
          <Input type="password" label="Password" s={12}><Icon>visibility_of</Icon></Input>
        </Row>
          <div className = "button">
            <Button waves='light'><Icon>thumb_up</Icon>Registrate</Button>
          </div>
      </div>
    )
  }
}

export default Formulario;