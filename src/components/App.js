import React, { Component } from 'react';
import axios from 'axios';
import UserList from './UserList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then((users) => {
        console.log(users);
        this.setState({users: users.data});
      })
  }

  filterUsers(term) {
    let filteredUsers = [];
    this.state.users.forEach((user) => {

    })
  }

  render() {
    return (
      <UserList users={this.state.users} />
    );
  }
}

export default App;