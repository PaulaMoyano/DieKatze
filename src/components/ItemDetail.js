/* eslint-disable react/prop-types */
import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => (
  <div className="card purple lighten-4">
    <div className="card-content white-text">
      <span className="card-title">
        {item.title}
      </span>
      <img className="responsive-img circle" src={item.pictureURL} alt={item.title} />
      <p>
        {`$${item.price}`}
      </p>
      <p>
        {item.description}
      </p>
    </div>
    <div className="card-action">
      <ItemCount stock={5} onAdd={() => null} />
    </div>
  </div>
);

export default ItemDetail;
