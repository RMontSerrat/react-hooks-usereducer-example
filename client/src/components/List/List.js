import React from 'react';
import './List.scss';

const List = ({ children, title }) =>
  <div className="List">
    {children}
  </div>

export default List;