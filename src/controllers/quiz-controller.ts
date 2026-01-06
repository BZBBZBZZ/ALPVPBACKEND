import { NextFunction, Request, Response } from "express";
import { QuizService } from "../services/quiz-service";

export class QuizController {
    
    // POST /api/questions (Untuk Seeder via Postman)
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await QuizService.createQuestion(req.body);
            res.status(200).json({ data: response });
        } catch (e) {
            next(e);
        }
    }

    // GET /api/quiz/start (Ambil soal buat main)
    static async startQuiz(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await QuizService.getQuestions();
            res.status(200).json({ data: response });
        } catch (e) {
            next(e);
        }
    }

    // POST /api/quiz/submit (Kirim jawaban & dapat skor)
    static async submitQuiz(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await QuizService.calculateResult(req.body);
            res.status(200).json({ data: response });
        } catch (e) {
            next(e);
        }
    }

    static async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id, 10);
            const response = await QuizService.getQuestionById(id);
            res.status(200).json({ data: response });
        } catch (e) {
            next(e);
        }
    }

    // DELETE /api/questions/:id
    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id, 10);
            const response = await QuizService.deleteQuestion(id);
            res.status(200).json({ data: response });
        } catch (e) {
            next(e);
        }
    }

}