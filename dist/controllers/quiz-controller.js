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
exports.QuizController = void 0;
const quiz_service_1 = require("../services/quiz-service");
class QuizController {
    // POST /api/questions (Untuk Seeder via Postman)
    static create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield quiz_service_1.QuizService.createQuestion(req.body);
                res.status(200).json({ data: response });
            }
            catch (e) {
                next(e);
            }
        });
    }
    // GET /api/quiz/start (Ambil soal buat main)
    static startQuiz(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield quiz_service_1.QuizService.getQuestions();
                res.status(200).json({ data: response });
            }
            catch (e) {
                next(e);
            }
        });
    }
    // POST /api/quiz/submit (Kirim jawaban & dapat skor)
    static submitQuiz(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield quiz_service_1.QuizService.calculateResult(req.body);
                res.status(200).json({ data: response });
            }
            catch (e) {
                next(e);
            }
        });
    }
    static getById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id, 10);
                const response = yield quiz_service_1.QuizService.getQuestionById(id);
                res.status(200).json({ data: response });
            }
            catch (e) {
                next(e);
            }
        });
    }
    // DELETE /api/questions/:id
    static delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id, 10);
                const response = yield quiz_service_1.QuizService.deleteQuestion(id);
                res.status(200).json({ data: response });
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.QuizController = QuizController;
