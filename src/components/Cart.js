import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Cart() {
  const { cart, removeItem, cartSize } = useContext(CartContext);

  const cartTotal = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0), [cart],
  );

  return cartSize > 0 ? (
    <div>
      <div className="row purple lighten-4 z-depth-2" style={{ margin: '5px 0' }}>
        <div className="col s4 l3 xl2 offset-s2 offset-l4 offset-xl4">
          <p>PRODUCTO</p>
        </div>
        <div className="col s2 l1 xl1"><p>CANTIDAD</p></div>
        <div className="col s2 l1 xl1"><p>TOTAL</p></div>
      </div>
      {cart.map((item) => (
        <div className="row purple lighten-4 z-depth-2" style={{ margin: '5px 0' }} key={item.id}>
          <div className="col s2 l2 xl1 offset-l2 offset-xl3"><img className="responsive-img circle" src={`${process.env.PUBLIC_URL}/assets/${item.pictureURL}`} alt={item.title} style={{ maxHeight: '100px' }} /></div>
          <div className="col s4 l3 xl2">
            <p>{item.title}</p>
            <p>
              {`$${item.price}`}
            </p>
          </div>
          <div className="col s2 l1 xl1"><p>{item.quantity}</p></div>
          <div className="col s2 l1 xl1"><p>{`$${item.price * item.quantity}`}</p></div>
          <div className="col s2 l1 xl1">
            <button className="btn-floating btn-small waves-effect waves-light purple lighten-2" type="button" onClick={() => removeItem(item.id)}>
              <i className="material-icons">remove</i>
            </button>
          </div>
        </div>
      ))}
      <div className="row purple lighten-4 z-depth-2" style={{ margin: '5px 0' }}>
        <div className="col s2 l1 xl1 offset-s6 offset-l7 offset-xl6"><p>TOTAL</p></div>
        <div className="col s2 l1 xl1"><p>{`$${cartTotal}`}</p></div>
      </div>
    </div>
  ) : (
    <div>
      <span>No hay ningún producto en el carrito</span>
      <i className="material-icons">mood_bad</i>
      <Link to="/" className="waves-effect waves-light btn purple lighten-4 z-depth-2">Volver al listado de productos</Link>
    </div>
  );
}

export default Cart;
