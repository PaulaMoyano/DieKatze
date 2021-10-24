/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import Item from './Item';

const ItemList = ({ items, onAdd }) => (<div className="row" id="list">{items.map((item) => <div className="col s12 m4 l3" key={item.uid}><Item item={item} onAdd={onAdd} /></div>)}</div>);

export default ItemList;
