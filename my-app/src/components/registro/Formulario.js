import React, { Component } from 'react';

class Formulario extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div>
          <input type="email" placeholder = "Email"/>
        </div>
        <div>
          <input type="password" placeholder = "Password"/>
        </div>
        <div>
          <button>Registrar</button>
        </div>
      </div>
    )
  }
}

export default Formulario;