// importing modules
import React, { Component } from 'react';
import axios from 'axios';
import Filter from './Filter';
// importing from search bar
import UserDetail from './UserDetail';
import UserList from './UserList';

class App extends Component {
  // classes are stateful components
  // aware of list of users, and state of users

  constructor(props) {
    super(props);

    this.state = {
      // want all incoming data to come from state --> controlled component, aka it can keep track of data
      // everytime state changes--> triggers re-render
      users: [],
      selectedUser: null,
      term: ''
    };

    //this.setState is asynchronous
    // won't be able to console.log after setting state--> only after the re-render

    // shortcut
    this.userFilter = this.userFilter.bind(this);
  }

  componentDidMount() {
    // when data comes back from server, render it

    axios
    // small library that makes network requests/http calls (alternative: ajax/jquery)
      .get("http://jsonplaceholder.typicode.com/users")
      .then((users) => {
        // success
        // make get request, then when promise returns--> do things
        this.setState({
          users: users.data,
          selectedUser: users.data[0]
        });
      })
      .catch((error) => {
        // error/failure
        // if something goes wrong with the request
        console.error(error);
      });
  }

  // passing up search term
  // passing down function
  userFilter(term) {
    this.setState({ term: term });
    // update state with that term
  }

  render() {
    let filteredUsers = this.state.users.filter(user => user.name.includes(this.state.term));
    return (
      <div>
        <div className="center"><strong>React Review</strong></div>
        <Filter
          // FROM FILTER.JS EXPORT
          value={this.state.term} // term defaults to blank value
          updateFilter={this.userFilter} // passing in function called userFilter
        />
        <UserDetail
          // saving selected user on state
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