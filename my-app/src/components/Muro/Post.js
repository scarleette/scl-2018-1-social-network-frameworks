import React, { Component } from 'react';
import Likes from './Likes';
import { Row } from 'react-materialize';


class Post extends Component {
  render() {
    return (
      <div>
        {this.props.items.map(item => (
          <Row>
            <div>
              <h6 key={item.id}>{item.text}</h6>
              < Likes/>
            </div>
          </Row>
        ))}
      </div>
    );
  }
}

export default Post;