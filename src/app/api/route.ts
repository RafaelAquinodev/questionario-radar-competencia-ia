import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const data = await req.json();
  try {
    const questionAnswer = await prisma.question.create({
      data: {
        answers: data.answers,
        company: data.company,
      },
    });
    return NextResponse.json(questionAnswer, { status: 201 });
  } catch (error) {
    console.error("Erro ao salvar questionAnswer:", error);
    return NextResponse.json({ error: "Erro ao salvar" }, { status: 500 });
  }
}
