/* eslint-disable max-len */
import alimentoSolido from '../assets/alimento solido.png';
import lata from '../assets/lata.jpg';
import piedritas from '../assets/piedritas.jpg';
import pouch from '../assets/pouch.png';
import snacks from '../assets/snacks.jpg';

export const FOOD_CATEGORY = 'Alimento';
export const HYGIENE_CATEGORY = 'Higiene';
export const CATEGORIES = [FOOD_CATEGORY, HYGIENE_CATEGORY];

export const ITEMS = [
  {
    id: 1, title: 'Pouchs', price: 100, pictureURL: pouch, description: 'Alimento humedo sabor atún, pollo y carne', category: FOOD_CATEGORY,
  },
  {
    id: 2, title: 'Snacks', price: 80, pictureURL: snacks, description: 'Golosina sabor salmón y pollo', category: FOOD_CATEGORY,
  },
  {
    id: 3, title: 'Alimento seco', price: 200, pictureURL: alimentoSolido, description: 'Alimento seco para gatos adultos', category: FOOD_CATEGORY,
  },
  {
    id: 4, title: 'Latas', price: 150, pictureURL: lata, description: 'Alimento humedo sabor salmón, pollo y pavo', category: FOOD_CATEGORY,
  },
  {
    id: 5, title: 'Piedras sanitarias', price: 200, pictureURL: piedritas, description: 'Piedras sanitarias sin aromatizantes', category: HYGIENE_CATEGORY,
  },
];

export const getItems = (category) => new Promise((resolve) => {
  setTimeout(() => resolve(category ? ITEMS.filter((item) => item.category === category) : ITEMS), 2000);
});

export const getItem = (id) => new Promise((resolve) => {
  setTimeout(() => resolve(ITEMS.find((item) => item.id === id) || {}), 2000);
});

export const getCategories = () => new Promise((resolve) => {
  setTimeout(() => resolve(CATEGORIES), 2000);
});
