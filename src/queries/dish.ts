import { useMutation } from 'react-query';
import queryAsync from '../network/apiClient';
import { DishDetailType } from '../types';

const useSearchDish = () => {
  return useMutation<DishDetailType[], unknown, void, unknown>(
    ['search-dish'],
    () => {
      return queryAsync<DishDetailType[]>({
        path: `/api/recipes`,
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
        path: `/api/recipes/${id}`,
        type: 'GET',
      });
    }
  );
};

const useAddDish = () => {
  return useMutation<object, unknown, DishDetailType, unknown>(
    ['dish-details'],
    (data) => {
      return queryAsync<object>({
        path: `/api/recipes`,
        type: 'POST',
        data: { ...data },
      });
    }
  );
};

export { useSearchDish, useDishDetail, useAddDish };
