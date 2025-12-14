import { Question } from "../generated/prisma";

// Tipe data untuk Request bikin soal
export interface CreateQuestionRequest {
    question_text: string;
    option_a: string;
    option_b: string;
    option_c: string;
    option_d: string;
    correct_answer: string;
    explanation: string;
}

// Response soal ke User (Kunci jawaban DIHAPUS agar user tidak bisa intip)
export interface QuestionResponse {
    id: number;
    question_text: string;
    option_a: string;
    option_b: string;
    option_c: string;
    option_d: string;
}

// Request saat submit jawaban
export interface SubmitQuizRequest {
    answers: {
        question_id: number;
        answer: string;
    }[];
}

export interface QuestionResultDetail {
    question_id: number;
    user_answer: string;
    correct_answer: string;
    is_correct: boolean;
    explanation: string;
} 

// Response hasil akhir
export interface QuizResultResponse {
    total_questions: number;
    correct_count: number;
    score: number;
    details: QuestionResultDetail[];
}

// Helper convert Prisma model ke Response (hide correct_answer)
export function toQuestionResponse(q: Question): QuestionResponse {
    return {
        id: q.id,
        question_text: q.question_text,
        option_a: q.option_a,
        option_b: q.option_b,
        option_c: q.option_c,
        option_d: q.option_d,
    };
}