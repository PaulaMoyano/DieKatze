import alimentoSolido from '../assets/alimento solido.png';
import lata from '../assets/lata.jpg';
import piedritas from '../assets/piedritas.jpg';
import pouch from '../assets/pouch.png';
import snacks from '../assets/snacks.jpg';

export const ITEMS = [
  {
    id: 1, title: 'Pouchs', price: 100, pictureURL: pouch, description: 'Alimento humedo sabor atún, pollo y carne',
  },
  {
    id: 2, title: 'Snacks', price: 80, pictureURL: snacks, description: 'Golosina sabor salmón y pollo',
  },
  {
    id: 3, title: 'Alimento seco', price: 200, pictureURL: alimentoSolido, description: 'Alimento seco para gatos adultos',
  },
  {
    id: 4, title: 'Latas', price: 150, pictureURL: lata, description: 'Alimento humedo sabor salmón, pollo y pavo',
  },
  {
    id: 5, title: 'Piedras sanitarias', price: 200, pictureURL: piedritas, description: 'Piedras sanitarias sin aromatizantes',
  },
];

export const getItems = () => new Promise((resolve) => {
  setTimeout(() => resolve(ITEMS), 2000);
});

export const getItem = () => new Promise((resolve) => {
  setTimeout(() => resolve(ITEMS[0]), 2000);
});
