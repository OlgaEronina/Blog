import React, {Component} from 'react';
import './Login.scss';

export default class Login extends Component {
    handleSignIn = (event) =>{
        event.preventDefault();

    };

    render() {

        return (
            <div>
                <a onClick={this.handleSignIn} href="#" className="signIn">Sign in</a>
                <div className='login'>
                    <label htmlFor='login'>Enter your login <br/> <input id='login'/></label>
                    <br/>
                    <label htmlFor='password'>Enter your password <br/> <input id='password' type='password'/></label>
                    <br/>
                    <button className='send'>Send</button>
                </div>
            </div>
        )
    }
}