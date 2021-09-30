/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({
  initial = 0, stock, onAdd, quantity,
}) => {
  const [count, setCount] = useState(initial);

  const onIncrease = () => {
    if (count < stock) setCount(count + 1);
  };

  const onDecrease = () => {
    if (count > 0) setCount(count - 1);
  };

  const onAddProduct = () => onAdd(count);

  return (
    !quantity ? (
      <div>
        <button className="btn-floating btn-small waves-effect waves-light purple lighten-2" type="button" onClick={onDecrease} disabled={count <= 0}><i className="material-icons">remove</i></button>
        <span className="white-text">{count}</span>
        <button className="btn-floating btn-small waves-effect waves-light purple lighten-2" type="button" onClick={onIncrease} disabled={count >= stock}><i className="material-icons">add</i></button>
        <div style={{ marginTop: '10px' }}><button className="waves-effect waves-light btn purple lighten-2" type="button" disabled={count <= 0} onClick={onAddProduct}>Agregar producto</button></div>
      </div>
    ) : (
      <div>
        <p>Ya se encuentra en el carrito.</p>
        <Link to="/cart" className="waves-effect waves-light btn purple lighten-4 z-depth-2">Terminar compra</Link>
      </div>
    )
  );
};

export default ItemCount;
