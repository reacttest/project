import React , { Component } from 'react';
import axios from 'axios';

class Login extends Component {

    getSth() {
        axios.get('/test')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <p>Login</p>
                <button onClick={this.getSth.bind(this)}>test</button>
            </div>
        )
    }
};

export default Login;