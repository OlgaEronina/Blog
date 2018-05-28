import React, {Component} from 'react';
import './Header.scss';
import Menu from '../Menu';
import Login from '../Login'

const menuItems = [
    {link:'#',title:'Main'},
    {link:'#',title:'News'},
    {link:'#',title:'Contacts'},
    {link:'#',title:'About'}
];

export default class Header extends Component{

    render(){
        return(
            <div className='header'>
                <Login/>
                <Menu items = {menuItems} />
            </div>
        )
    }
}
