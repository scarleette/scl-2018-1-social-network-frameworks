import React, { Component } from 'react';
import firebase from 'firebase';


class LoginGoogle extends Component {
    handleAuth () {
        const provider = new firebase.auth.GoogleAuthProvider();

}

render() {
    return (
        <div>
            <button onClick= {this.handleAuth.bind(this)}></button>
        </div>
        )
    }
}
 

export default LoginGoogle;