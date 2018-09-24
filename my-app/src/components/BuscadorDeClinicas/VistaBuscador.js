import React, { Component } from 'react';
import Navbar from '../Common/Navbar';
import Carrusel from '../Common/Carrusel';
import InformacionClinicas from './Informacion';

class VistaBuscador extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Carrusel/>
        <h1>Buscador De Clinicas</h1>
        <InformacionClinicas/>
      </div>
    )
  }

}

export default VistaBuscador;