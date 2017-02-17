import React from 'react';
import UserListItem from './UserListItem';

const UserList = (props) => {
  let users = props.users.map((user) => {
    return (
      <UserListItem 
        key={user.id} 
        user={user} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {users}
    </ul>
  );
};

export default UserList;