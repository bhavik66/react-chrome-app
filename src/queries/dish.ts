import { useMutation } from 'react-query';
import queryAsync from '../network/apiClient';
import { DishDetailType, DishListItemType } from '../types';

const useSearchDish = () => {
  return useMutation<DishListItemType[], unknown, string, unknown>(
    ['search-dish'],
    (searchTerm) => {
      return queryAsync<DishListItemType[]>({
        path: `/api/search?q=${searchTerm}`, // Pass the search term as a query parameter
        type: 'GET',
      });
    }
  );
};

const useDishDetail = () => {
  return useMutation<DishDetailType, unknown, number, unknown>(
    ['dish-details'],
    (id) => {
      return queryAsync<DishDetailType>({
        path: `/api/dish/${id}`, // Pass the search term as a query parameter
        type: 'GET',
      });
    }
  );
};

export { useSearchDish, useDishDetail };
