import React, { Component } from 'react';
import Search from '../components/App/Search';

export default class Main extends Component {

  state = {
    username: ''
  }

  handleUserChange = ({ target }) => {
    this.setState({ username: target.value });
  };

  handleUserSubmit = () => {
    //get a user and set the state as user
  }
  render() {
    return (
      <div>
        <Search 
          userName={ this.state.username } 
          onUserChange={ this.handleUserChange }
          onUserSubmit={ this.handleUserSubmit }
        />
      </div>
    );
  }
}
