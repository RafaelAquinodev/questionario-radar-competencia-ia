import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import type { Prisma } from "@prisma/client";

const prisma = new PrismaClient();

interface RequestBody {
  answers: Prisma.InputJsonValue;
  company: string;
}

interface ErrorResponse {
  error: string;
}

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const data: RequestBody = await req.json();

    const questionAnswer = await prisma.question.create({
      data: {
        answers: data.answers,
        company: data.company,
      },
    });

    return NextResponse.json(questionAnswer, { status: 201 });
  } catch (error) {
    console.error("Erro ao salvar questionAnswer:", error);
    return NextResponse.json({ error: "Erro ao salvar" } as ErrorResponse, {
      status: 500,
    });
  }
}
