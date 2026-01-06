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
exports.QuizService = void 0;
const database_util_1 = require("../utils/database-util");
const validation_1 = require("../validations/validation");
const quiz_validation_1 = require("../validations/quiz-validation");
const quiz_model_1 = require("../models/quiz-model");
const response_error_1 = require("../error/response-error");
class QuizService {
    // logic tambah soal,seeder
    static createQuestion(req) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.questions || !Array.isArray(req.questions)) {
                throw new Error("Format nya salah bang, harus kirim kek gini, { questions: [ {isi data soal quiz}, {dan seterusnya} ]}");
            }
            const cleanData = [];
            for (const item of req.questions) {
                const validatedItem = validation_1.Validation.validate(quiz_validation_1.QuizValidation.CREATE_QUESTION, item);
                cleanData.push(validatedItem);
            }
            const result = yield database_util_1.prismaClient.question.createMany({
                data: cleanData
            });
            return `berhasil nambah ${result.count} soal baru!`;
        });
    }
    // logic ambil semua soal, buat mulai quiz
    static getQuestions() {
        return __awaiter(this, void 0, void 0, function* () {
            const questions = yield database_util_1.prismaClient.question.findMany({
                orderBy: { id: "asc" }
            });
            return questions.map(quiz_model_1.toQuestionResponse);
        });
    }
    // logic Hitung Skor 
    // 3. Logic Hitung Skor (Quiz Result)
    static calculateResult(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const validatedData = validation_1.Validation.validate(quiz_validation_1.QuizValidation.SUBMIT_ANSWERS, req);
            const allQuestions = yield database_util_1.prismaClient.question.findMany();
            let correctCount = 0;
            const details = [];
            for (const userAns of validatedData.answers) {
                const realQuestion = allQuestions.find(q => q.id === userAns.question_id);
                if (realQuestion) {
                    // === PERBAIKAN DISINI ===
                    // Kita paksa keduanya jadi huruf kecil biar "A" dianggap sama dengan "a"
                    const isCorrect = realQuestion.correct_answer.toLowerCase() === userAns.answer.toLowerCase();
                    if (isCorrect)
                        correctCount++;
                    // Masukkan data ke details buat dikirim ke frontend
                    details.push({
                        question_id: realQuestion.id,
                        user_answer: userAns.answer,
                        correct_answer: realQuestion.correct_answer,
                        is_correct: isCorrect,
                        explanation: realQuestion.explanation
                    });
                }
            }
            // Mencegah pembagian dengan nol jika tidak ada soal
            const totalQ = allQuestions.length > 0 ? allQuestions.length : 1;
            const score = (correctCount / totalQ) * 100;
            return {
                total_questions: allQuestions.length,
                correct_count: correctCount,
                score: Math.round(score),
                details: details
            };
        });
    }
    static getQuestionById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const question = yield database_util_1.prismaClient.question.findUnique({
                where: { id }
            });
            if (!question) {
                throw new Error("Soal tidak ditemukan");
            }
            return (0, quiz_model_1.toQuestionResponse)(question);
        });
    }
    static deleteQuestion(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const question = yield database_util_1.prismaClient.question.findUnique({
                where: { id }
            });
            if (!question) {
                throw new response_error_1.ResponseError(404, "Soal tidak ditemukan!");
            }
            yield database_util_1.prismaClient.question.delete({
                where: { id }
            });
            return "Soal berhasil dihapus";
        });
    }
}
exports.QuizService = QuizService;
