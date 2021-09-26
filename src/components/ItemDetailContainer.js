/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { getItem } from '../data/mock';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { addItem, getFromCart } = useContext(CartContext);
  const { id } = useParams();
  const [item, setItem] = useState({});
  const history = useHistory();
  const { quantity = 0 } = getFromCart(item.id) || {};

  const onAdd = (count) => {
    addItem(item, count);
    history.push('/cart');
  };

  useEffect(() => {
    getItem(parseInt(id, 10)).then((result) => {
      setItem(result);
    });
  }, [id]);

  return (
    <ItemDetail item={item} onAdd={onAdd} quantityOnCart={quantity} />
  );
};

export default ItemDetailContainer;
