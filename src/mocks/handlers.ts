import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  searchResult,
  dishDetails1,
  dishDetails2,
  dishDetails3,
  dishDetails4,
  dishDetails5,
} from '../sampleData';

const mock = new MockAdapter(axios);

mock.onGet('/api/recipes').reply((config) => {
  const searchTerm =
    new URLSearchParams(config.url?.substring(config.url?.indexOf('?'))).get(
      'q'
    ) || '';
  const results = searchResult.filter((dish) =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return [
    200,
    {
      status: 'success',
      data: results,
    },
  ];
});

mock.onGet(/\/api\/recipes\/\d+/).reply((config) => {
  const id = config.url?.substring(config.url?.lastIndexOf('/') + 1);

  let dishDetails;
  switch (id) {
    case '1':
      dishDetails = dishDetails1;
      break;
    case '2':
      dishDetails = dishDetails2;
      break;
    case '3':
      dishDetails = dishDetails3;
      break;
    case '4':
      dishDetails = dishDetails4;
      break;
    case '5':
      dishDetails = dishDetails5;
      break;
    default:
      return [404];
  }

  return [
    200,
    {
      status: 'success',
      data: dishDetails,
    },
  ];
});

mock.onPost('/api/recipes').reply(() => {
  return [
    200,
    {
      status: 'success',
    },
  ];
});
