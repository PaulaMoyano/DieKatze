/* eslint-disable react/prop-types */
import React from 'react';
import ItemCount from './ItemCount';

const Item = ({ item, onAdd }) => (
  <div className="card purple lighten-4">
    <div className="card-content white-text">
      <span className="card-title">
        {item.title}
      </span>
      <img className="responsive-img circle" src={item.pictureURL} alt={item.title} style={{ maxHeight: '200px' }} />
      <p>
        {`$${item.price}`}
      </p>
    </div>
    <div className="card-action">
      <ItemCount stock={5} onAdd={onAdd} />
    </div>
  </div>
);

export default Item;
