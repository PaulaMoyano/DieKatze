/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { getItem } from '../data/mock';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  useEffect(() => {
    getItem().then(setItem);
  }, []);

  return (
    <ItemDetail item={item} />
  );
};

export default ItemDetailContainer;
