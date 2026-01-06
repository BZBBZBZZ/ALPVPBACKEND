import express from "express";
import { FoodController } from "../controllers/food-controller";
import { QuizController } from "../controllers/quiz-controller";

export const apiRouter = express.Router();

// Food Routes
apiRouter.get("/foods", FoodController.getAll);
apiRouter.get("/foods/:foodId", FoodController.getDetail);

// Quiz Routes
// 1. Seeder (Isi Soal)
apiRouter.post("/questions", QuizController.create);

// 2. Main Quiz (Start)
apiRouter.get("/quiz/start", QuizController.startQuiz);

// 3. Result (Selesai)
apiRouter.post("/quiz/submit", QuizController.submitQuiz);

// ambil question per id
apiRouter.get("/questions/:id", QuizController.getById);

// hapus question per id
apiRouter.delete("/questions/:id", QuizController.delete);
