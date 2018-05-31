import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Header from './components/Header'
import Main from './components/Main'
import Login from './components/Login'
import SideMenu from './components/SideMenu'
import Footer from './components/Footer'
import CommentForm from './components/CommentForm'
import Comment from './components/Comment'
import MainPage from './components/MainPage'
import UserList from './components/Users/UserList.jsx'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      comments: []
    }
  }

  handleSend = (comment) => {
    const {comments} = this.state
    this.setState({
        comments: comments.concat([comment])
      }
    )
  }

  render () {
    const {comments} = this.state

    return (
      <div>
        <MainPage/>
        {/*<Header/>*/}
        <Main/>
        <UserList />
        <Comment items={comments}/>
        <CommentForm onSend={this.handleSend}/>

      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('root'))