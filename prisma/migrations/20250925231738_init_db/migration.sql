-- CreateTable
CREATE TABLE "Questions" (
    "id" TEXT NOT NULL,
    "questionNumber" INTEGER NOT NULL,
    "answerNumber" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Questions_pkey" PRIMARY KEY ("id")
);
