import { House } from '../models/house';

export const MockHouses: House[] = [
  {
    title: 'Très belle maison',
    category: 'Maison',
    description: 'Lorem ipsum',
    sold: false,
    surface: 250,
    rooms: 5,
    price: 400000,
  },
  {
    title: 'Studio',
    category: 'Appartement',
    description: 'Lorem ipsum',
    sold: false,
    surface: 25,
    rooms: 1,
    price: 75000,
  },
  {
    title: 'Villa',
    category: 'Maison',
    description: 'Lorem ipsum',
    sold: true,
    surface: 500,
    rooms: 9,
    price: 1000000,
  },
  {
    title: 'Coup de coeur',
    category: 'Maison',
    description: 'Lorem ipsum',
    sold: false,
    surface: 150,
    rooms: 4,
    price: 300000,
  }
];
