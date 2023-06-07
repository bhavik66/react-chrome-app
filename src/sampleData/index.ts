import { DishListItemType, DishDetailType } from '../types';

const searchResult: DishListItemType[] = [
  {
    label: 'Spanish Paella',
    id: 1,
  },
  {
    label: 'Grilled Salmon',
    id: 2,
  },
  {
    label: 'Garlic Butter Shrimp',
    id: 3,
  },
  {
    label: 'Lobster Thermidor',
    id: 4,
  },
  {
    label: 'Sushi Rolls',
    id: 5,
  },
];

const dishDetails1: DishDetailType = {
  countryCode: 'SP',
  title: 'Spanish Paella',
  recipe:
    'Spanish paella is a traditional rice dish that originated in the Valencia region of Spain. It was originally made with ingredients such as saffron, rabbit, and snails, which were common in the area.',
  fullRecipeWebsite: 'https://google.com',
  difficulty: 'Medium',
  social: {
    twitter: 'https://twitter.com',
    telegram: 'https://telegram.org/',
    medium: 'https://medium.com',
    website: 'https://google.com',
  },
  info: {
    seafood: [
      {
        value: 'Jumbo Shrimp',
        severity: 'none',
      },
    ],
    produce: [
      {
        value: 'Onion',
        severity: 'low',
      },
      {
        value: 'Tomato',
        severity: 'high',
      },
    ],
    spices: [
      {
        value: 'Bay Leaf',
        severity: 'low',
      },
      {
        value: 'Saffron',
        severity: 'medium',
      },
    ],
    oliveOil: [
      {
        value: 'Spanish Olive Oil',
        severity: 'medium',
      },
    ],
    volume: '700g',
    serve: 4,
    authenticity: {
      value: 'Unverified',
      severity: 'medium',
    },
    stock: [
      {
        value: 'Chicken',
        severity: 'medium',
      },
    ],
  },
};

const dishDetails2: DishDetailType = {
  countryCode: 'US',
  title: 'Grilled Salmon',
  recipe:
    'Grilled salmon is a delicious seafood dish made by grilling fresh salmon fillets. It is often marinated with herbs and spices to enhance the flavor and then cooked on a grill or barbecue.',
  fullRecipeWebsite: 'https://google.com',
  difficulty: 'Easy',
  social: {
    twitter: 'https://twitter.com',
    telegram: 'https://telegram.org/',
    medium: 'https://medium.com',
    website: 'https://google.com',
  },
  info: {
    seafood: [
      {
        value: 'Salmon',
        severity: 'none',
      },
    ],
    produce: [
      {
        value: 'Tomato',
        severity: 'low',
      },
    ],
    spices: [
      {
        value: 'Salt',
        severity: 'none',
      },
      {
        value: 'Pepper',
        severity: 'none',
      },
      {
        value: 'Lemon',
        severity: 'low',
      },
    ],
    oliveOil: [
      {
        value: 'Olive Oil',
        severity: 'medium',
      },
    ],
    volume: '200g',
    serve: 2,
    authenticity: {
      value: 'Unverified',
      severity: 'medium',
    },
    stock: [
      {
        value: 'Spanish Olive',
        severity: 'medium',
      },
    ],
  },
};

const dishDetails3: DishDetailType = {
  countryCode: 'US',
  title: 'Garlic Butter Shrimp',
  recipe:
    'Garlic butter shrimp is a flavorful seafood dish made by sautéing shrimp in garlic-infused butter. It is often seasoned with herbs and spices and served as an appetizer or main course.',
  fullRecipeWebsite: 'https://google.com',
  difficulty: 'Easy',
  social: {
    twitter: 'https://twitter.com',
    telegram: 'https://telegram.org/',
    medium: 'https://medium.com',
    website: 'https://google.com',
  },
  info: {
    seafood: [
      {
        value: 'Shrimp',
        severity: 'none',
      },
    ],
    produce: [
      {
        value: 'Garlic',
        severity: 'low',
      },
      {
        value: 'Parsley',
        severity: 'low',
      },
    ],
    spices: [
      {
        value: 'Salt',
        severity: 'none',
      },
      {
        value: 'Pepper',
        severity: 'none',
      },
      {
        value: 'Paprika',
        severity: 'low',
      },
    ],
    oliveOil: [
      {
        value: 'Olive Oil',
        severity: 'medium',
      },
    ],
    volume: '300g',
    serve: 3,
    authenticity: {
      value: 'Unverified',
      severity: 'medium',
    },
    stock: [
      {
        value: 'Lemon',
        severity: 'low',
      },
    ],
  },
};

const dishDetails4: DishDetailType = {
  countryCode: 'FR',
  title: 'Lobster Thermidor',
  recipe:
    'Lobster Thermidor is a classic French seafood dish made by combining cooked lobster meat with a creamy sauce, flavored with mustard, tarragon, and white wine. It is then topped with a cheese and breadcrumb mixture and baked until golden and bubbling.',
  fullRecipeWebsite: 'https://google.com',
  difficulty: 'High',
  social: {
    twitter: 'https://twitter.com',
    telegram: 'https://telegram.org/',
    medium: 'https://medium.com',
    website: 'https://google.com',
  },
  info: {
    seafood: [
      {
        value: 'Lobster',
        severity: 'none',
      },
    ],
    produce: [
      {
        value: 'Onion',
        severity: 'low',
      },
      {
        value: 'Garlic',
        severity: 'low',
      },
      {
        value: 'Parsley',
        severity: 'low',
      },
    ],
    spices: [
      {
        value: 'Salt',
        severity: 'none',
      },
      {
        value: 'Pepper',
        severity: 'none',
      },
    ],
    oliveOil: [
      {
        value: 'Olive Oil',
        severity: 'medium',
      },
    ],
    volume: '600g',
    serve: 2,
    authenticity: {
      value: 'Verified',
      severity: 'high',
    },
    stock: [
      {
        value: 'Fish',
        severity: 'medium',
      },
    ],
  },
};

const dishDetails5: DishDetailType = {
  countryCode: 'JP',
  title: 'Sushi Rolls',
  recipe:
    'Sushi rolls, also known as makizushi, are a popular Japanese seafood dish made by wrapping sushi rice and various fillings in sheets of seaweed (nori). The fillings can include raw or cooked seafood, vegetables, and other ingredients.',
  fullRecipeWebsite: 'https://google.com',
  difficulty: 'Medium',
  social: {
    twitter: 'https://twitter.com',
    telegram: 'https://telegram.org/',
    medium: 'https://medium.com',
    website: 'https://google.com',
  },
  info: {
    seafood: [
      {
        value: 'Tuna',
        severity: 'none',
      },
      {
        value: 'Salmon',
        severity: 'none',
      },
      {
        value: 'Shrimp',
        severity: 'none',
      },
    ],
    produce: [
      {
        value: 'Cucumber',
        severity: 'low',
      },
      {
        value: 'Avocado',
        severity: 'low',
      },
    ],
    spices: [
      {
        value: 'Wasabi',
        severity: 'low',
      },
      {
        value: 'Soy Sauce',
        severity: 'none',
      },
      {
        value: 'Ginger',
        severity: 'none',
      },
    ],
    oliveOil: [
      {
        value: 'Olive Oil',
        severity: 'medium',
      },
    ],
    volume: 'Varies',
    serve: 2,
    authenticity: {
      value: 'Verified',
      severity: 'high',
    },
    stock: [
      {
        value: 'Lemon',
        severity: 'low',
      },
    ],
  },
};

export {
  searchResult,
  dishDetails1,
  dishDetails2,
  dishDetails3,
  dishDetails4,
  dishDetails5,
};
