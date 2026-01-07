import { Question } from "../generated/prisma";

// tipe data untuk request bikin soal
export interface CreateQuestionRequest {
    ingredient_id: number;
    question_text: string;
    option_a: string;
    option_b: string;
    option_c: string;
    option_d: string;
    correct_answer: string;
    explanation: string;
}

// response soal ke User, ini yang ditunjukin ke user 
export interface QuestionResponse {
    id: number;
    question_text: string;
    option_a: string;
    option_b: string;
    option_c: string;
    option_d: string;
}

// request saat submit jawaban
export interface SubmitQuizRequest {
    username?: string; // optional, include to record score in leaderboard
    answers: {
        question_id: number;
        answer: string;
    }[];
}

// muncul di result view 
export interface QuestionResultDetail {
    question_id: number;
    question_text: string; // <--- SUDAH DITAMBAHKAN (SOLUSI BIAR GAK MERAH)
    user_answer: string;
    correct_answer: string;
    is_correct: boolean;
    explanation: string;
} 

// response hasil akhir
export interface QuizResultResponse {
    total_questions: number;
    correct_count: number;
    score: number;
    details: QuestionResultDetail[];
}

// helper convert prisma model ke response 
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