"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizValidation = void 0;
const zod_1 = __importDefault(require("zod"));
class QuizValidation {
}
exports.QuizValidation = QuizValidation;
// ngevalidate pas postman input soal baru
QuizValidation.CREATE_QUESTION = zod_1.default.object({
    ingredient_id: zod_1.default.number().positive(),
    question_text: zod_1.default.string().min(1),
    option_a: zod_1.default.string().min(1),
    option_b: zod_1.default.string().min(1),
    option_c: zod_1.default.string().min(1),
    option_d: zod_1.default.string().min(1),
    correct_answer: zod_1.default.enum(["a", "b", "c", "d"]),
    explanation: zod_1.default.string().min(1),
});
// ngevalidate jawaban user 
QuizValidation.SUBMIT_ANSWERS = zod_1.default.object({
    answers: zod_1.default.array(zod_1.default.object({
        question_id: zod_1.default.number(),
        answer: zod_1.default.string()
    }))
});
