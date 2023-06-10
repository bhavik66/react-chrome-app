import { DishDetailType } from '../types';

export const dishDetails1: DishDetailType = {
  id: 1,
  name: 'Spaghetti Bolognese',
  origin: 'it',
  description: 'Classic Italian dish with meat sauce served over spaghetti.',
  difficulty: 3,
  protein: 'Ground beef',
  produce: 'Tomatoes, onions, garlic',
  spice: 'Italian herbs, salt, pepper',
  cookingOil: 'Olive oil',
  volume: 500,
  serves: 4,
  authenticity: 'Authentic',
  stock: 'Beef stock',
};

export const dishDetails2: DishDetailType = {
  id: 2,
  name: 'Chicken Tikka Masala',
  origin: 'in',
  description:
    'A popular Indian dish with grilled chicken in a creamy tomato sauce.',
  difficulty: 2,
  protein: 'Chicken',
  produce: 'Onions, tomatoes, ginger, garlic',
  spice: 'Garam masala, cumin, coriander, paprika',
  cookingOil: 'Vegetable oil',
  volume: 600,
  serves: 5,
  authenticity: 'Authentic',
  stock: 'Chicken stock',
};

export const dishDetails3: DishDetailType = {
  id: 3,
  name: 'Sushi',
  origin: 'jp',
  description:
    'Delicate rolls of vinegared rice with various fillings, typically seafood.',
  difficulty: 3,
  protein: 'Fish (e.g., salmon, tuna), shrimp',
  produce: 'Seaweed, cucumber, avocado',
  spice: 'Wasabi, soy sauce',
  cookingOil: 'N/A',
  volume: 400,
  serves: 6,
  authenticity: 'Authentic',
  stock: 'N/A',
};

export const dishDetails4: DishDetailType = {
  id: 4,
  name: 'Pad Thai',
  origin: 'th',
  description:
    'Stir-fried rice noodles with tofu, shrimp, or chicken, in a tangy and savory sauce.',
  difficulty: 2,
  protein: 'Tofu, shrimp, chicken',
  produce: 'Bean sprouts, green onions, garlic chives',
  spice: 'Chili flakes, tamarind paste',
  cookingOil: 'Vegetable oil',
  volume: 550,
  serves: 4,
  authenticity: 'Authentic',
  stock: 'N/A',
};

export const dishDetails5: DishDetailType = {
  id: 5,
  name: 'Hamburger',
  origin: 'us',
  description:
    'A classic American dish consisting of a ground beef patty in a bun, often with toppings and condiments.',
  difficulty: 2,
  protein: 'Ground beef',
  produce: 'Lettuce, tomatoes, onions',
  spice: 'Salt, pepper',
  cookingOil: 'Vegetable oil',
  volume: 250,
  serves: 2,
  authenticity: 'N/A',
  stock: 'N/A',
};

export const searchResult = [
  dishDetails1,
  dishDetails2,
  dishDetails3,
  dishDetails4,
  dishDetails5,
];
