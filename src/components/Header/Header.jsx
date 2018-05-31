import React, { Component } from 'react'
import './Header.scss'
import Menu from '../Menu'
import Login from '../Login'

const menuItems = [
  {link: '#', title: 'Main Page'},
  {link: '#', title: 'Blog'},
  {link: '#', title: 'Users'},
  {link: '#', title: 'Comments'}
]

export default class Header extends Component{

  render () {
    return (
      <div className='header'>
        <Menu items={menuItems} />
        <Login />
      </div>
    )
  }
}
