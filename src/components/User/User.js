import React from 'react';
import { Link } from 'react-router-dom'
import './User.scss';

const User = ({ login, avatarUrl, id }) => 
  <li className="User">
    <Link to={`/user/${login}`}>
      <img src={avatarUrl} className="avatar" alt={`avatar - ${login}`} />
      <div className="informations">
        <h3>{login}</h3>
        <p>ID: {id}</p>
      </div>
    </Link>
  </li>

export default User;