import React from 'react';
import SearchBox from '../../components/SearchBox/SearchBox';
import './Container.scss';

const Container = ({ children, query }) => {
  return (
    <div className="home">
      <header>
        <h3>Encontre repositórios por usuários no Github</h3>
      </header>
      <SearchBox query={query} />
      <div>
        {children}
      </div>
    </div>
  )
}

export default Container;