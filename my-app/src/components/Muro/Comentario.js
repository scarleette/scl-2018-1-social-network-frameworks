import React, { Component } from 'react'; 
import vistaMuro from './vistaMuro.css';
import {Row, Col, Button} from 'react-materialize';

class Comentario extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className = "contenedorComentario">
        <Row>
          <Col s={6}>
            <textarea className = "comentario"></textarea>
            <Button floating large className='red' waves='light' icon='add' />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Comentario;
