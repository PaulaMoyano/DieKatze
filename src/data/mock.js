import alimentoSolido from '../assets/alimento solido.png';
import lata from '../assets/lata.jpg';
import piedritas from '../assets/piedritas.jpg';
import pouch from '../assets/pouch.png';
import snacks from '../assets/snacks.jpg';

export const ITEMS = [
  {
    id: 1, title: 'Pouchs', price: 100, pictureURL: pouch,
  },
  {
    id: 2, title: 'Snacks', price: 80, pictureURL: snacks,
  },
  {
    id: 3, title: 'Alimento seco', price: 200, pictureURL: alimentoSolido,
  },
  {
    id: 4, title: 'Latas', price: 150, pictureURL: lata,
  },
  {
    id: 5, title: 'Piedras sanitarias', price: 200, pictureURL: piedritas,
  },
];

export const getItems = () => new Promise((resolve) => {
  setTimeout(() => resolve(ITEMS), 2000);
});
