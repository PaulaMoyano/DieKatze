/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const Item = ({ item, onAdd }) => {
  const history = useHistory();
  const { getFromCart } = useContext(CartContext);
  const { quantity = 0 } = getFromCart(item.id) || {};

  const onAddToCart = (count) => {
    onAdd(item, count);
    history.push('/cart');
  };

  return (
    <div className="card center-align purple lighten-4">
      <Link to={`/item/${item.uid}`}>
        <div className="card-content white-text">
          <span className="card-title">
            {item.title}
          </span>
          <img className="responsive-img circle" src={`${process.env.PUBLIC_URL}/assets/${item.pictureURL}`} alt={item.title} style={{ maxHeight: '200px' }} />
          <p>
            {`$${item.price}`}
          </p>
        </div>
      </Link>
      <div className="card-action" style={{ height: '120px' }}>
        <ItemCount stock={item.stock} onAdd={onAddToCart} quantity={quantity} />
      </div>
    </div>
  );
};

export default Item;
