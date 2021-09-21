/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const Item = ({ item, onAdd }) => (
  <div className="card center-align purple lighten-4">
    <Link to={`/item/${item.id}`}>
      <div className="card-content white-text">
        <span className="card-title">
          {item.title}
        </span>
        <img className="responsive-img circle" src={item.pictureURL} alt={item.title} style={{ maxHeight: '200px' }} />
        <p>
          {`$${item.price}`}
        </p>
      </div>
    </Link>
    <div className="card-action">
      <ItemCount stock={5} onAdd={onAdd} />
    </div>
  </div>
);

export default Item;
