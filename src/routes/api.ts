import express from "express";
import { FoodController } from "../controllers/food-controller";

export const apiRouter = express.Router();

apiRouter.get("/foods", FoodController.getAll);

apiRouter.get("/foods/:foodId", FoodController.getDetail);
