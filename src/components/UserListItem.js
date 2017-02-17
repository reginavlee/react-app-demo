import React from 'react';

const UserListItem = (props) => {

  return(
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-body">
          <div className="media-heading">{props.user.name}</div>
        </div>
      </div>
    </li>
  ); 
};

export default UserListItem;