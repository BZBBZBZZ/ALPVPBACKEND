-- CreateTable
CREATE TABLE "questions" (
    "id" SERIAL NOT NULL,
    "ingredient_id" INTEGER NOT NULL,
    "question_text" TEXT NOT NULL,
    "option_a" VARCHAR(255) NOT NULL,
    "option_b" VARCHAR(255) NOT NULL,
    "option_c" VARCHAR(255) NOT NULL,
    "option_d" VARCHAR(255) NOT NULL,
    "correct_answer" CHAR(1) NOT NULL,
    "explanation" TEXT NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);
