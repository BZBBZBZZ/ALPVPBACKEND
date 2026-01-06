"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toQuestionResponse = toQuestionResponse;
// helper convert prisma model ke response 
function toQuestionResponse(q) {
    return {
        id: q.id,
        question_text: q.question_text,
        option_a: q.option_a,
        option_b: q.option_b,
        option_c: q.option_c,
        option_d: q.option_d,
    };
}
