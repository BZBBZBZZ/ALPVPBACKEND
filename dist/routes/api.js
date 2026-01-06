"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = __importDefault(require("express"));
const food_controller_1 = require("../controllers/food-controller");
const quiz_controller_1 = require("../controllers/quiz-controller");
exports.apiRouter = express_1.default.Router();
// Food Routes
exports.apiRouter.get("/foods", food_controller_1.FoodController.getAll);
exports.apiRouter.get("/foods/:foodId", food_controller_1.FoodController.getDetail);
// Quiz Routes
// 1. Seeder (Isi Soal)
exports.apiRouter.post("/questions", quiz_controller_1.QuizController.create);
// 2. Main Quiz (Start)
exports.apiRouter.get("/quiz/start", quiz_controller_1.QuizController.startQuiz);
// 3. Result (Selesai)
exports.apiRouter.post("/quiz/submit", quiz_controller_1.QuizController.submitQuiz);
// ambil question per id
exports.apiRouter.get("/questions/:id", quiz_controller_1.QuizController.getById);
// hapus question per id
exports.apiRouter.delete("/questions/:id", quiz_controller_1.QuizController.delete);
