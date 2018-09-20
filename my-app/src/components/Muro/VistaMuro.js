import React, { Component } from 'react';
import './vistaMuro.css';
import Navbar from '../Common/Navbar';
import Comentario from './Comentario';



class VistaMuro extends Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <div>
        <div>
          <Navbar/>
        </div>
        <div>
          <Comentario/>
        </div>
      </div>
    )
  }
}

export default VistaMuro;