import React from 'react';
import './SearchBox.scss';

const SearchBox = ({ value, onSubmit }) => (
  <div className="search-box">
    <form onSubmit={onSubmit}>
        <input type="text" name="q" id="searchUsers" placeholder="Buscar usuário" value={value} required />
        <input type="submit" value="Enviar" />
    </form>
  </div>
)

export default SearchBox;