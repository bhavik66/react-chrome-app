export interface DishListItemType {
  label: string;
  id: number;
}

export interface InfoType {
  value: string;
  severity: 'low' | 'medium' | 'high' | 'none';
}

export interface DishDetailType {
  countryCode: string;
  title: string;
  social: {
    twitter: string;
    telegram: string;
    medium: string;
    website: string;
  };
  recipe: string;
  fullRecipeWebsite: string;
  difficulty: string;
  info: {
    seafood: InfoType[];
    produce: InfoType[];
    spices: InfoType[];
    oliveOil: InfoType[];
    volume: string;
    serve: number;
    authenticity: InfoType;
    stock: InfoType[];
  };
}
