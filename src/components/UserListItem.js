import React from 'react';

const UserListItem = (props) => {
  // takes in information and spits out JSX

  return(
    // bubbling up is information, but actual function that you're calling is being passed down
    // passing up search term
    // passing down function
    <li onClick={() => props.onUserSelect(props.user)} className="list-group-item">
      <div>
        <div><strong>Name:</strong> {props.user.name}</div>
        <div><strong>Username:</strong> {props.user.username}</div>
        <div><strong>Email:</strong> {props.user.email}</div>
        <div><strong>Street:</strong> {props.user.address.street}</div>
        <div><strong>Suite:</strong> {props.user.address.suite}</div>
        <div><strong>City:</strong> {props.user.address.city}</div>
        <div><strong>Zipcode:</strong> {props.user.address.zipcode}</div>
        <div><strong>Company Name:</strong> {props.user.company.name}</div>
        <div><strong>Company Catchphrase:</strong> {props.user.company.catchPhrase}</div>
      </div>
    </li>
  ); 
};

export default UserListItem;