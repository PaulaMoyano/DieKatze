import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Hola!" />
    </div>
  );
}

export default App;
