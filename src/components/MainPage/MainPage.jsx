import React, { Component } from 'react'
import './MainPage.scss'
import Header from '../Header'
import MainContent from '../MainContent'

export default class MainPage extends Component {
  render () {
    return (
      <div>
        <Header />
        <MainContent />
      </div>
    )
  }
}