import React from 'react';

const UserDetail = (props) => {
  if (!props.user) {
    return <div>Loading...</div>;
  };

  return (
    <div>
      <div className="center">
        <div><strong>Spotlight User</strong></div>
          <div><strong>Name:</strong>{props.user.name}</div>
          <div><strong>Username:</strong>{props.user.username}</div>
          <div><strong>Email:</strong>{props.user.email}</div>
      </div>
    </div>
  );
};

export default UserDetail;