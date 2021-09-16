/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { getItems } from '../data/mock';
import ItemDetailContainer from './ItemDetailContainer';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then(setItems);
  });

  const onAdd = (count) => console.log(count);

  return (
    <div>
      <h1>{ greeting }</h1>
      <ItemList items={items} onAdd={onAdd} />
      <ItemDetailContainer />
    </div>
  );
};

export default ItemListContainer;
