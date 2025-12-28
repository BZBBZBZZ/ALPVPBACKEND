import { Food } from "../generated/prisma";

export interface FoodResponse {
  id: number;
  name: string;
  category: string;
  image_url: string;
  short_desc: string;
  food_detail_desc: string;
}

export function toFoodResponse(food: Food): FoodResponse {
  return {
    id: food.id,
    name: food.name,
    category: food.category,
    image_url: food.image_url,
    short_desc: food.short_desc,
    food_detail_desc: food.food_detail_desc,
  };
}
