import express from "express";
import { FoodController } from "../controllers/food-controller";
import { QuizController } from "../controllers/quiz-controller";
import { UserController } from "../controllers/user-controller";
import { AuthController } from "../controllers/auth-controller";
import { authMiddleware } from "../middlewares/auth-middleware";

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

// Leaderboard
apiRouter.get("/leaderboard", UserController.getLeaderboard);

// Auth
apiRouter.post("/auth/register", AuthController.register);
apiRouter.post("/auth/login", AuthController.login);
apiRouter.get("/auth/me", authMiddleware, AuthController.me);
