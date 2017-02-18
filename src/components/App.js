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
      selectedUser: null,
      term: ''
    };

    this.userFilter = this.userFilter.bind(this);
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

  userFilter(term) {
    this.setState({ term: term });
  }

  render() {
    let filteredUsers = this.state.users.filter(user => user.name.includes(this.state.term));
    return (
      <div>
        <div className="center"><strong>React Review</strong></div>
        <Filter
          value={this.state.term}
          updateFilter={this.userFilter}
        />
        <UserDetail
          user={this.state.selectedUser}
        />
        <UserList
          onUserSelect={selectedUser => this.setState({selectedUser: selectedUser})}
          users={filteredUsers} 
        />
      </div>
    );
  }
}

export default App;