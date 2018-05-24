import React, {Component} from 'react';
import './Header.css';
import classNames from 'classnames';
import Menu from '../Menu';

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
                <Menu items = {menuItems} />
            </div>
        )
    }
}
