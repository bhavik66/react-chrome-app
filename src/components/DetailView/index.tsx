import React from 'react';
import { Error, Header, InfoCard, Loader, RecipeCard, Search } from '..';
import { useDishDetail } from '../../queries/dish';

import * as s from './styles';

export interface DetailViewProps {
  onAddRecipe: () => void;
}

const DetailView: React.FC<DetailViewProps> = ({ onAddRecipe }) => {
  const { isLoading, mutate, data, isError } = useDishDetail();

  const handleSearchSelection = (id: number) => {
    mutate(id);
  };

  return (
    <s.Container>
      <Search onSelect={handleSearchSelection} />
      {isLoading ? (
        <Loader />
      ) : data ? (
        <>
          <Header
            title={data.name}
            origin={data.origin}
            onAddRecipe={onAddRecipe}
          />
          <RecipeCard recipe={data.description} difficulty={data.difficulty} />
          <InfoCard
            protein={data.protein}
            produce={data.produce}
            spice={data.spice}
            cookingOil={data.cookingOil}
            volume={data.volume}
            serves={data.serves}
            authenticity={data.authenticity}
            stock={data.stock}
          />
        </>
      ) : isError ? (
        <Error />
      ) : null}
    </s.Container>
  );
};

export default DetailView;
