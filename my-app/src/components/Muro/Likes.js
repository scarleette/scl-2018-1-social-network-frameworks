import React, { Component } from 'react';

class SecondScreen extends Component {
  constructor() {
    super();
    this.state = {
      contador: 0
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.contador}</p>
        <button onClick={this.contadorLikes.bind(this)}>Like</button>
      </div>
    )
  }

  contadorLikes() {
    this.setState({
      contador: this.state.contador + 1
    })
  }
}

export default SecondScreen;