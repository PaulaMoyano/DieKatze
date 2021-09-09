/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const ItemCount = ({ initial = 0, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const onIncrease = () => {
    if (count < stock) setCount(count + 1);
  };

  const onDecrease = () => {
    if (count > 0) setCount(count - 1);
  };

  const onAddProduct = () => onAdd(count);

  return (
    <div>
      <button className="btn-floating btn-small waves-effect waves-light purple lighten-2" type="button" onClick={onDecrease} disabled={count <= 0}><i className="material-icons">remove</i></button>
      <span>{count}</span>
      <button className="btn-floating btn-small waves-effect waves-light purple lighten-2" type="button" onClick={onIncrease} disabled={count >= stock}><i className="material-icons">add</i></button>
      <div><button className="waves-effect waves-light btn purple lighten-2" type="button" onClick={onAddProduct}>Agregar producto</button></div>
    </div>
  );
};

export default ItemCount;
