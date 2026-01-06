import { prismaClient } from "../utils/database-util";
import { Validation } from "../validations/validation";
import { QuizValidation } from "../validations/quiz-validation";
import {
    CreateQuestionRequest,
    QuestionResponse,
    SubmitQuizRequest,
    QuizResultResponse,
    QuestionResultDetail,
    toQuestionResponse
} from "../models/quiz-model";
import { ResponseError } from "../error/response-error";

export class QuizService {

    // logic tambah soal,seeder
    static async createQuestion(req:{ questions: CreateQuestionRequest[] }): Promise<string> 
    {
        if (!req.questions || !Array.isArray(req.questions))
        {
            throw new Error("Format nya salah bang, harus kirim kek gini, { questions: [ {isi data soal quiz}, {dan seterusnya} ]}")
        }

        const cleanData: CreateQuestionRequest[] = [];
        
        for (const item of req.questions)
        {
            const validatedItem = Validation.validate<CreateQuestionRequest>
            (
                QuizValidation.CREATE_QUESTION,
                item
            );
            cleanData.push(validatedItem);
        }

        const result = await prismaClient.question.createMany(
            {
                data: cleanData
            }
        );
        
        return `berhasil nambah ${result.count} soal baru!`;
    }

    // logic ambil semua soal, buat mulai quiz
    static async getQuestions(): Promise<QuestionResponse[]> {
        const questions = await prismaClient.question.findMany({
            orderBy: { id: "asc" }
        });

        return questions.map(toQuestionResponse);
    }

    // logic Hitung Skor 
    static async calculateResult(req: SubmitQuizRequest): Promise<QuizResultResponse> 
    {
        const validatedData = Validation.validate<SubmitQuizRequest>(
            QuizValidation.SUBMIT_ANSWERS,
            req
        );

        const allQuestions = await prismaClient.question.findMany();

        let correctCount = 0;
        const details : QuestionResultDetail[] = [];

        for (const userAns of validatedData.answers) {
            const realQuestion = allQuestions.find(q => q.id === userAns.question_id);
            
            if (realQuestion) {
                const isCorrect = realQuestion.correct_answer === userAns.answer;
                
                if (isCorrect) correctCount++;

                // masukin data detail
                details.push({
                    question_id: realQuestion.id,
                    user_answer: userAns.answer,
                    correct_answer: realQuestion.correct_answer,
                    is_correct: isCorrect,
                    explanation: realQuestion.explanation // <--- INI DIA
                });
            }
        }
        const score = (correctCount / allQuestions.length) * 100;

       return {
            total_questions: allQuestions.length,
            correct_count: correctCount,
            score: Math.round(score),
            details: details // kirim detail ke user
        };
    }

     static async getQuestionById(id: number): Promise<QuestionResponse> {
        const question = await prismaClient.question.findUnique({
            where: { id }
        });
        if (!question) {
            throw new Error("Soal tidak ditemukan");
        }
        return toQuestionResponse(question);
    }

 static async deleteQuestion(id: number): Promise<string> {
        const question = await prismaClient.question.findUnique({
            where: { id }
        });

        if (!question) {
            throw new ResponseError(404, "Soal tidak ditemukan!");
        }

        await prismaClient.question.delete({
            where: { id }
        });

        return "Soal berhasil dihapus";
    }

}

