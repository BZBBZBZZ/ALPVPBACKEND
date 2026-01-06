"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodService = void 0;
const database_util_1 = require("../utils/database-util");
const response_error_1 = require("../error/response-error");
const food_model_1 = require("../models/food-model");
class FoodService {
    static getAllFoods() {
        return __awaiter(this, void 0, void 0, function* () {
            const foods = yield database_util_1.prismaClient.food.findMany();
            return foods.map((food) => (0, food_model_1.toFoodResponse)(food));
        });
    }
    static getFoodDetail(foodId) {
        return __awaiter(this, void 0, void 0, function* () {
            const food = yield database_util_1.prismaClient.food.findUnique({
                where: {
                    id: foodId,
                },
            });
            if (!food) {
                throw new response_error_1.ResponseError(404, "Food not found!");
            }
            return (0, food_model_1.toFoodResponse)(food);
        });
    }
}
exports.FoodService = FoodService;
