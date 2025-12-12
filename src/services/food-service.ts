import { prismaClient } from "../utils/database-util";
import { ResponseError } from "../error/response-error";
import { toFoodResponse, FoodResponse } from "../models/food-model";

export class FoodService {
  static async getAllFoods(): Promise<FoodResponse[]> {
    const foods = await prismaClient.food.findMany();

    return foods.map((food) => toFoodResponse(food));
  }

  static async getFoodDetail(foodId: number): Promise<FoodResponse> {
    const food = await prismaClient.food.findUnique({
      where: {
        id: foodId,
      },
    });

    if (!food) {
      throw new ResponseError(404, "Food not found!");
    }

    return toFoodResponse(food);
  }
}
