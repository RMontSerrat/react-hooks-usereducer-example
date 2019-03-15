import React from 'react';
import { Link } from 'react-router'
import Loading from './loading'


const User = ({ login, avatarUrl, id }) => 
  <li>
    <Link to={`/user/${login}`}>
        <img src={avatarUrl} className="avatar" />
        <div className="informations">
            <h3>{login}</h3>
            <p>ID: {id}</p>
        </div>
    </Link>
  </li>

const UserList = ({ loading, data }) =>
  loading ? <Loading /> :
    <ul className="result-container">
        {data.map(({ login, avatarUrl, id }) => <User key={login} login={login} avatarUrl={avatarUrl} id={id} />)}
    </ul>

export default UserList;