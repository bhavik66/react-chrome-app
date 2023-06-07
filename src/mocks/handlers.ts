import { rest } from 'msw';
import {
  searchResult,
  dishDetails1,
  dishDetails2,
  dishDetails3,
  dishDetails4,
  dishDetails5,
} from '../sampleData';

export const handlers = [
  rest.get('/api/search', (req, res, ctx) => {
    const searchTerm = req.url.searchParams.get('q') || '';
    const results = searchResult.filter((dish) =>
      dish.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return res(
      ctx.status(200),
      ctx.json({
        status: 'success',
        data: results,
      })
    );
  }),

  rest.get('/api/dish/:id', (req, res, ctx) => {
    const { id } = req.params;

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
        return res(ctx.status(404));
    }

    return res(
      ctx.status(200),
      ctx.json({
        status: 'success',
        data: dishDetails,
      })
    );
  }),
];
