/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getItem } from '../data/mock';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [quantity, setQuantity] = useState(0);
  const history = useHistory();

  const onAdd = (count) => {
    setQuantity(quantity + count);
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
