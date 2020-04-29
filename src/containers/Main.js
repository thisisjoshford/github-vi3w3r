import React, { Component } from 'react';
import Search from '../components/Search/Search';
import fetchUser from '../components/Services/githubAPI';

export default class Main extends Component {

  state = {
    username: '',
    user: {
      login: '',
      followers: 0,
      following: 0,
      html_url: ''
    },
  }

  handleUserChange = ({ target }) => {
    this.setState({ username: target.value });
  };

  handleUserSubmit = () => {
    //get a user and set the state as user
    fetchUser(this.state.userName)
      .then(user => this.setState({ user }));
  
  }
  render() {
    return (
      <>
        <Search 
          userName={ this.state.username } 
          onUserChange={ this.handleUserChange }
          onUserSubmit={ this.handleUserSubmit }
        />
      </>
    );
  }
}
