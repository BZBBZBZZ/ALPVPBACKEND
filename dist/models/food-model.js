"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toFoodResponse = toFoodResponse;
function toFoodResponse(food) {
    return {
        id: food.id,
        name: food.name,
        category: food.category,
        image_url: food.image_url,
        short_desc: food.short_desc,
        food_detail_desc: food.food_detail_desc,
    };
}
