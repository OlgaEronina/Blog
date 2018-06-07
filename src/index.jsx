import React, { Component } from "react";
import ReactDom from "react-dom";
import Main from "./components/Main";
import CommentForm from "./components/CommentForm";
import Comment from "./components/Comment";
import MainPage from "./components/MainPage";
import PokemonList from "./containers/PokemonListContainer.jsx";
import UserList from 'containers/UserInfoContainer.jsx'

class App extends Component {
  handleSend = (comment) => {
    const {comments} = this.state;
    this.setState({
        comments: comments.concat([comment])
      }
    );
  };

  constructor (props) {
    super(props);

    this.state = {
      comments: []
    };
  }

  render () {
    const {comments} = this.state;

    return (
      <div>
        <MainPage/>
        <Main/>
        <Comment items={comments}/>
        <CommentForm onSend={this.handleSend}/>
        <UserList />
        <PokemonList/>
      </div>
    );
  }
}

ReactDom.render(<App/>, document.getElementById("root"));