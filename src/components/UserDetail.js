import React from 'react';

const UserDetail = (props) => {
  console.log('in user detail', props);
  if (!props.user) {
    return <div>Loading...</div>;
  };

  return (
    <div>
      <div className="details">
        <div>{props.user.username}</div>
        <div>{props.user.email}</div>
      </div>
    </div>
  );
};

export default UserDetail;