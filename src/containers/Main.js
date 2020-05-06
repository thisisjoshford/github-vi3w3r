import React, { Component } from 'react';
import Search from '../components/Search/Search';
import UserDetails from '../components/UserDetails/UserDetails';
import { fetchUser, fetchRepos } from '../Services/githubAPI';

export default class Main extends Component {
  state = {
    userName: '',
    user: {
      login: '',
      followers: 0,
      following: 0,
      html_url: '',
      repos: []
    },
  }

  handleUserChange = ({ target }) => {
    this.setState({ userName: target.value });
  };

  handleUserSubmit = () => {
    fetchUser(this.state.userName)
      .then(user => this.setState({ user }));
      
    fetchRepos(this.state.userName)
      .then(user => this.setState({ repos }));
  }
  render() {
   
    return (
      <>
        <Search 
          userName={ this.state.userName } 
          onUserChange={ this.handleUserChange }
          onUserSubmit={ this.handleUserSubmit }
        />
        <UserDetails { ...this.state.user } />;
      </>
    );
  }
}
