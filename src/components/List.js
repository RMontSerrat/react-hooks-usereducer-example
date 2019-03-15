import React from 'react';
import Loading from './loading'

const Item = ({ name, description, html_url }) => (
  <li>
    <a href={html_url} target="_blank">
        <h3>{name}</h3>
        <p>{description}</p>
    </a>
  </li>
)

const List = ({ loading, data, userLogin, onClick }) =>
  loading ? <Loading /> :
    <div className="repository">
        <span className="go-back" onClick={onClick}>Voltar para listagem de usuário</span>
        <div className="result-container">
            <header>
                <h3>Mostrando repositórios de <b>{userLogin}</b></h3>
            </header>
            <ul className="result-container">
              {data.map(item => <Item key={item.name} name={item.name} description={item.description} html_url={item.html_url} />)}
            </ul>
        </div>
    </div>

export default List;