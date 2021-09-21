/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../data/mock';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  const onAdd = (count) => console.log(count);

  useEffect(() => {
    getItem(parseInt(id, 10)).then((result) => {
      setItem(result);
    });
  }, [id]);

  return (
    <ItemDetail item={item} onAdd={onAdd} />
  );
};

export default ItemDetailContainer;
