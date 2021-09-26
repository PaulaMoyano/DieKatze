import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import { getCategories } from './data/mock';
import CartProvider from './context/CartContext';

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar categories={categories} />
        <Switch>
          <Route path="/" exact>
            <ItemListContainer greeting="Hola!" />
          </Route>
          <Route path="/category/:categoryId">
            <ItemListContainer greeting="Hola!" />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
