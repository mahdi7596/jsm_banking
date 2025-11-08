export const CATEGORIES = [
  "healthy",
  "fast food",
  "Italian",
  "Japanese",
] as const;

export type Category = (typeof CATEGORIES)[number];

export interface IFood {
  id: number;
  name: string;
  price: number;
  category: Category;
}
