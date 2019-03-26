import React from 'react';
import './List.scss';

const List = ({ children, title }) =>
  <div className="result-container">
    <header>
      <h3>{title}</h3>
    </header>
    <ul className="result-container">
      {children}
    </ul>
  </div>

export default List;