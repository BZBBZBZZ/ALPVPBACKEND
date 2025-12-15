import z, { ZodType } from "zod";
import { CreateQuestionRequest, SubmitQuizRequest } from "../models/quiz-model";


export class QuizValidation {
    // Validasi saat Admin/Postman input soal baru
    static readonly CREATE_QUESTION: ZodType<CreateQuestionRequest> = z.object({
        ingredient_id: z.number().positive(),
        question_text: z.string().min(1),
        option_a: z.string().min(1),
        option_b: z.string().min(1),
        option_c: z.string().min(1),
        option_d: z.string().min(1),
        correct_answer: z.enum(["a", "b", "c", "d"]),
        explanation: z.string().min(1),
    });

    // Validasi saat User kirim jawaban (Array of answers)
    static readonly SUBMIT_ANSWERS: ZodType<SubmitQuizRequest> = z.object({
        answers: z.array(z.object({
            question_id: z.number(),
            answer: z.string()
        }))
    });
}