import React, {Component} from 'react';
import './Login.css';

export default class Login extends Component{
    render(){
        return(
            <div className= 'login'>
                <label htmlFor='login'>Enter your login <br/> <input id='login'/></label>
                <br/>
                <label htmlFor='password'>Enter your password <br/> <input id='password' type= 'password'/></label>
                <br/>
                <button className='send'>Send</button>
            </div>
        )
    }
}