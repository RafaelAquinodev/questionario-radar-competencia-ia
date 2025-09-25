/*
  Warnings:

  - You are about to drop the `Questions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Questions";

-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "answers" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);
