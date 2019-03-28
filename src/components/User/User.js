import React from 'react';
import { Link } from 'react-router-dom'
import './User.scss';

const User = ({ login, avatarUrl, id }) => 
  <Link to={`/user/${login}`} className="User">
    <div>
      <img src={avatarUrl} className="avatar" alt={`avatar - ${login}`} />
      <div className="informations">
        <strong>{login}</strong>
        <p>ID: {id}</p>
      </div>
    </div>
  </Link>

export default User;