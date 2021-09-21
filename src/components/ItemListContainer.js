/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItems } from '../data/mock';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getItems(categoryId).then(setItems);
  }, [categoryId]);

  const onAdd = (count) => console.log(count);

  return (
    <div>
      <h1>{ greeting }</h1>
      <ItemList items={items} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
