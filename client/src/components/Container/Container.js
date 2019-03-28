import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchBox from '../../components/SearchBox/SearchBox';
import './Container.scss';

const Container = ({ children, onSubmit, history }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { target } = e;
    const value = target.querySelector('input[name="q"]').value;
    history.push(`/?q=${value}`);
    if (onSubmit) {
      onSubmit(value);
    }
  }
  
  return (
    <div className="home">
      <header>
        <h3>Encontre repositórios por usuários no Github</h3>
      </header>
      <SearchBox onSubmit={handleSubmit} />
      <div>
        {children}
      </div>
    </div>
  )
}

export default withRouter(Container);