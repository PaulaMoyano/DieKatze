/* eslint-disable react/prop-types */
import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item, onAdd, quantityOnCart }) => (
  <div className="card center-align purple lighten-4">
    <div className="card-content white-text">
      <span className="card-title">
        {item.title}
      </span>
      <img className="responsive-img circle" src={item.pictureURL} alt={item.title} style={{ maxHeight: '40vh' }} />
      <p>
        {`$${item.price}`}
      </p>
      <p>
        {item.description}
      </p>
    </div>
    <div className="card-action" style={{ height: '120px' }}>
      {!quantityOnCart ? <ItemCount stock={5} onAdd={onAdd} />
        : <span>Este producto ya se encuentra en el carrito.</span>}
    </div>
  </div>
);

export default ItemDetail;
