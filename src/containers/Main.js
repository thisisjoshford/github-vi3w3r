import React, { Component } from 'react';
import Search from '../components/Search/Search';
import { fetchUser } from '../Services/githubAPI';

export default class Main extends Component {

  state = {
    userName: '',
    user: {
      login: '',
      followers: 0,
      following: 0,
      html_url: ''
    },
  }

  handleUserChange = ({ target }) => {
    this.setState({ userName: target.value });
    (console.log(this.state.userName));
  };

  handleUserSubmit = () => {
    //get a user and set the state as user
    fetchUser(this.state.userName)
      .then(user => this.setState({ user }))
      .then(console.log(this.state.user));
  }
  render() {
    return (
      <>
        <Search 
          userName={ this.state.userName } 
          onUserChange={ this.handleUserChange }
          onUserSubmit={ this.handleUserSubmit }
        />
      </>
    );
  }
}
