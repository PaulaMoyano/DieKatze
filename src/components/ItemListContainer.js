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
      <div
        className="valign-wrapper"
        style={{
          backgroundImage: `url(${`${process.env.PUBLIC_URL}/assets/mainBackground.jpg`})`,
          backgroundPosition: 'center 85%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: 'calc(100vh - 65px)',
        }}
      >
        <h1 className="white-text" style={{ margin: 0 }}>{ greeting }</h1>
      </div>
      <ItemList items={items} onAdd={addItem} />
    </div>
  );
};

export default ItemListContainer;
