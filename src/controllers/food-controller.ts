import { Request, Response, NextFunction } from "express";
import { FoodService } from "../services/food-service";

export class FoodController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await FoodService.getAllFoods();

      res.status(200).json({
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  static async getDetail(req: Request, res: Response, next: NextFunction) {
    try {
      const foodId = parseInt(req.params.foodId);

      const response = await FoodService.getFoodDetail(foodId);

      res.status(200).json({
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }
}
