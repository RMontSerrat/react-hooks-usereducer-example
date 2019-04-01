import React from 'react';
import './Item.scss';

const Item = ({ name, description, html_url }) => (
  <div className="Item">
    <a href={html_url} target="_blank" rel="noopener noreferrer">
        <strong>{name}</strong>
        <p>{description}</p>
    </a>
  </div>
)

export default Item;