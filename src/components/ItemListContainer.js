/* eslint-disable react/prop-types */
import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({ greeting }) => {
  const onAdd = (count) => console.log(count);

  return (
    <div>
      <h1>{ greeting }</h1>
      <ItemCount initial={2} stock={15} onAdd={onAdd} />
      <ItemCount initial={5} stock={5} onAdd={onAdd} />
      <ItemCount stock={20} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
