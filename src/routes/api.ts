import express from "express";
import { QuizController } from "../controllers/quiz-controller";

export const publicRouter = express.Router();

// 1. Seeder (Isi Soal)
publicRouter.post("/questions", QuizController.create);

// 2. Main Quiz (Start)
publicRouter.get("/quiz/start", QuizController.startQuiz);

// 3. Result (Selesai)
publicRouter.post("/quiz/submit", QuizController.submitQuiz);