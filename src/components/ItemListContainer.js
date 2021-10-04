/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItems, getItemsByCategory } from '../api/items';
import { CartContext } from '../context/CartContext';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    const request = categoryId ? getItemsByCategory(categoryId) : getItems();
    request.then(setItems);
  }, [categoryId]);

  return (
    <div>
      <h1>{ greeting }</h1>
      <ItemList items={items} onAdd={addItem} />
    </div>
  );
};

export default ItemListContainer;
