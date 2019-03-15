import React from 'react';
import SearchBox from './searchbox';

const Home = ({ children, query }) => (
  <div className="home">
      <header>
          <h3>Encontre repositórios por usuários no Github</h3>
      </header>
      <SearchBox query={query} />
      {children}
  </div>
)

export default Home;