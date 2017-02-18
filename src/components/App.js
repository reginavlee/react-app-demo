import React, { Component } from 'react';
import axios from 'axios';
import Filter from './Filter';
import UserDetail from './UserDetail';
import UserList from './UserList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      selectedUser: null
    };
  }

  componentDidMount() {
    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then((users) => {
        this.setState({
          users: users.data,
          selectedUser: users.data[0]
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  filterUsers(term) {
    let filteredUsers = [];
    this.state.users.forEach((user) => {

    })
  }

  render() {
    return (
      <div>
        <Filter />
        <UserDetail user={this.state.selectedUser}/>
        <UserList
          onUserSelect={selectedUser => this.setState({selectedUser: selectedUser})}
          users={this.state.users} 
        />
      </div>
    );
  }
}

export default App;