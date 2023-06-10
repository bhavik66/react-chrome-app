export interface InfoType {
  severity: 'none' | 'low' | 'medium' | 'hard';
  value: string;
}

export interface DishDetailType {
  id?: number;
  name: string;
  origin: string;
  description: string;
  difficulty: number;
  protein: string;
  produce: string;
  spice: string;
  cookingOil: string;
  volume: number;
  serves: number;
  authenticity: string;
  stock: string;
}
