import { IFood } from "./models/Food";

interface FoodItemProps {
  food: IFood;
}

const FoodItem = ({ food }: FoodItemProps) => {
  const { id, category, name, price } = food;
  return (
    <div className="border border-amber-300 rounded-xs">
      {name}
      {price.toLocaleString()}
      <p>{category}</p>
    </div>
  );
};

export default FoodItem;
