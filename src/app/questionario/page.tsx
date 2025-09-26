"use client";

import { Button } from "@/components/ui/button";
import PageContainer from "../componentes/page-container";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

interface Question {
  id: number;
  title: string;
  question: string;
}

const questions: Question[] = [
  {
    id: 1,
    title: "Engenharia de Prompt",
    question:
      "Qual é o seu nível de domínio em Engenharia de Prompt, criando prompts avançados e contextualizados para obter respostas precisas de IA?",
  },
  {
    id: 2,
    title: "Geração de Imagens com IA",
    question:
      "Qual é a sua capacidade de criar prompts para geração de imagens, infográficos ou fluxos em ferramentas como DALL·E, Leonardo.AI ou Midjourney?",
  },
  {
    id: 3,
    title: "Pesquisa com IA",
    question:
      "Qual é a sua experiência em realizar pesquisas profundas (Deep Research) utilizando recursos como ChatGPT ou Manus para gerar insights estratégicos?",
  },
  {
    id: 4,
    title: "Organização da Informação",
    question:
      "Qual é o seu nível de conhecimento no uso de ferramentas de IA para aprendizado e organização da informação, como NotebookLM ou Obsidian?",
  },
  {
    id: 5,
    title: "Agentes de IA",
    question:
      "Qual é a sua experiência em criar ou configurar um agente básico de IA, como GPTs customizados, Crew AI ou LangChain?",
  },
  {
    id: 6,
    title: "Vibe Coding",
    question:
      "Qual é o seu nível de conhecimento e prática na criação de ferramentas usando Vibe Coding?",
  },
  {
    id: 7,
    title: "IA para Programação",
    question:
      "Qual é a sua familiaridade com soluções de IA para apoio à codificação, como Cursor, Claude AI ou Tabnine?",
  },
  {
    id: 8,
    title: "Automação com IA",
    question:
      "Qual é a sua habilidade em automatizar processos com plataformas como n8n, Make (Integromat) ou ComfyUI?",
  },
];

const QuestionarioPage = () => {
  const [answers, setAnswers] = useState<number[]>(new Array(8).fill(0));
  const progress =
    (answers.filter((answer) => answer !== 0).length / questions.length) * 100;

  const handleAnswerChange = (questionIndex: number, value: number[]) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value[0];
    setAnswers(newAnswers);
  };

  const resposta = questions.map((question) => ({
    pergunta: question.id,
    resposta: answers[question.id - 1],
  }));

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          answers: resposta,
        }),
      });

      if (response.ok) {
        toast.success("Respostas enviadas com sucesso!");
        setAnswers(new Array(8).fill(0));
      } else {
        toast.error("Erro ao enviar as respostas. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar as respostas:", error);
    }
  };

  return (
    <PageContainer className="items-start">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">
              Avaliação de Automação com IA
            </h1>
            <span className="text-sm text-muted-foreground">
              {answers.filter((answer) => answer !== 0).length} de 8 completadas
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="space-y-8">
          <p className="text-muted-foreground mb-8">
            Para cada pergunta, selecione um valor de 0 a 10 que melhor
            representa o estado atual da sua empresa.
          </p>

          {questions.map((question, index) => (
            <Card key={question.id} className="p-6">
              <CardHeader className="">
                <CardTitle className="text-lg">{question.title}</CardTitle>
                <CardDescription className="text-base">
                  {question.question}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Sua resposta:{" "}
                    {answers[index] === 0 ? "Nenhuma" : answers[index]}
                  </p>
                  <Slider
                    value={[answers[index]]}
                    onValueChange={(value) => handleAnswerChange(index, value)}
                    max={10}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="text-center">
            <Button
              size="lg"
              onClick={() => handleSubmit()}
              className="w-full text-base max-w-[400px] md:w-auto px-8"
            >
              Ver Meus Resultados
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default QuestionarioPage;
