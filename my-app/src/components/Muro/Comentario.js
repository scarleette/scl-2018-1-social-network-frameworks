import React, { Component } from 'react'; 
import './vistaMuro.css';
import {Row, Col, Button} from 'react-materialize';
import TodoList from './Lista';


// class Comentario extends Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return (
//       <div className = "contenedorComentario">1
//         <Row>
//           <Col s={6}>
//             <textarea className = "comentario"></textarea>
//             <Button floating large className='red' waves='light' icon='add' />
//           </Col>
//         </Row>
//       </div>
//     )
//   }
// }

// export default Comentario;

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      text: '' 
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <div  className = "contenedorComentario">
          <Row>
            <Col s = {12}>
            <h3>Comentarios</h3>
            <TodoList items={this.state.items} />
              <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={this.state.text}/>
                <Button>Post{this.state.items.length + 1}</Button>
              </form>
            </Col>
          </Row>
        </div>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

export default TodoApp;