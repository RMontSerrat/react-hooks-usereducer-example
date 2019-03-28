import React from 'react';
import './SearchBox.scss';

const SearchBox = ({ query, onSubmit, onClear }) => (
  <div className="search-box">
    <form onSubmit={onSubmit}>
        <input type="text" name="q" id="searchUsers" placeholder="Buscar usuário" value={query} readOnly={query} required />
        <input type="submit" value="Enviar" />
    </form>
  </div>
)

export default SearchBox;