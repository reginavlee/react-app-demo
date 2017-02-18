import React from 'react';
import UserListItem from './UserListItem';

const UserList = (props) => {
  let users = props.users.map((user) => {
    return (
      <UserListItem
        onUserSelect={props.onUserSelect}
        key={user.id} 
        user={user} 
      />
    );
  });

  return (
    <ul>
      {users}
    </ul>
  );
};

export default UserList;