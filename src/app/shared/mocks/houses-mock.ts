import { House } from '../models/house';

export const MockHouses: House[] = [
  {
    title: 'Très belle maison',
    category: 'Maison',
    description: 'Lorem ipsum',
    surface: 250,
    rooms: 5,
    price: 400000,
    sold: false,
  },
  {
    title: 'Studio',
    category: 'Appartement',
    description: 'Lorem ipsum',
    surface: 25,
    rooms: 1,
    price: 75000,
    sold: false,
  },
  {
    title: 'Villa',
    category: 'Maison',
    description: 'Lorem ipsum',
    surface: 500,
    rooms: 9,
    price: 1000000,
    sold: true,
  },
  {
    title: 'Coup de coeur',
    category: 'Maison',
    description: 'Lorem ipsum',
    surface: 150,
    rooms: 4,
    price: 300000,
    sold: false,
  }
];
