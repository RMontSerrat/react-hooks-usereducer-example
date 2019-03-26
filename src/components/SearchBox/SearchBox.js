import React from 'react';
import './SearchBox.scss';

const SearchBox = ({ query, onSubmit, onClear }) => (
  <div className="search-box">
      <form onSubmit={onSubmit}>
          <input type="text" name="q" id="searchUsers" placeholder="Buscar usuário" value={query} readOnly={query} required />
          <input type="submit" value="Enviar" />
      </form>
      {query && 
        <div className="result-informations">
          <p>Mostrando resultados para <b>{query}</b></p>
          <button className="clear-filters" onClick={onClear}>Limpar busca <b>X</b></button>
        </div>
      }
  </div>
)

export default SearchBox;