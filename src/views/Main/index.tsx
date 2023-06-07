import React from 'react';
import {
  Error,
  Header,
  InfoCard,
  Loader,
  RecipeCard,
  Search,
} from '../../components';
import { useDishDetail } from '../../queries/dish';
import { DishListItemType } from '../../types';

import * as s from './styles';

const Main = () => {
  const { isLoading, mutate, data, isError } = useDishDetail();

  const handleSearchSelection = (value: DishListItemType) => {
    mutate(value.id);
  };

  return (
    <s.Container>
      <Search onSelect={handleSearchSelection} />
      {isLoading ? (
        <Loader />
      ) : data ? (
        <>
          <Header title={data.title} social={data.social} />
          <RecipeCard
            recipe={data.recipe}
            fullRecipeWebsite={data.fullRecipeWebsite}
            difficulty={data.difficulty}
          />
          <InfoCard data={data.info} />
        </>
      ) : isError ? (
        <Error />
      ) : null}
    </s.Container>
  );
};

export default Main;
