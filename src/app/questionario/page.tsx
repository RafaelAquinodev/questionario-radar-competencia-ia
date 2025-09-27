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
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface Question {
  id: number;
  title: string;
  question: string;
}

interface FormData {
  company: string;
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
  const [formData, setFormData] = useState<FormData>({
    company: "",
  });
  const [isSending, setIsSending] = useState(false);

  const min = 0;
  const max = 10;
  const step = 1;
  const marks = Array.from({ length: max - min + 1 }, (_, i) => i + min);

  const router = useRouter();
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

  const totalScore = answers.reduce((acc, curr) => acc + curr, 0);

  const handleSubmit = async () => {
    if (isSending) return;
    if (!formData.company) {
      router.push(`/questionario/#0`);
      toast.error("Por favor, insira o nome da empresa.");
      return;
    }

    if (answers.some((answer) => answer === 0)) {
      router.push(
        `/questionario/#${answers.findIndex((answer) => answer === 0)}`
      );
      toast.error("Por favor, responda todas as perguntas.");
      return;
    }
    setIsSending(true);
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          answers: resposta,
          company: formData.company,
        }),
      });

      if (response.ok) {
        toast.success("Respostas enviadas com sucesso!");
        router.push(`/feedback/${totalScore}`);
        setAnswers(new Array(8).fill(0));
      } else {
        toast.error("Erro ao enviar as respostas. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar as respostas:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <PageContainer className="items-start">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-sm z-10 py-4 px-6 md:px-[8%] border-b border-border">
          <div className="flex justify-between gap-4 items-center mb-4">
            <h1 className="text-2xl font-bold">
              Avaliação de Automação com IA
            </h1>
            <span className="text-sm text-muted-foreground">
              {answers.filter((answer) => answer !== 0).length} de 8 completadas
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="space-y-8 mt-[120px]">
          <div className="space-y-8">
            <Card className="p-6">
              <CardContent>
                <div>
                  <Label
                    htmlFor="assessmentCompany"
                    className="text-base font-semibold"
                  >
                    Empresa
                  </Label>
                  <Input
                    required
                    id="assessmentCompany"
                    type="text"
                    placeholder="Digite o nome da sua empresa"
                    value={formData.company}
                    maxLength={30}
                    autoComplete="off"
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="mt-2 border border-border"
                  />
                </div>
              </CardContent>
            </Card>

            <p className="mb-8">
              Para cada pergunta, selecione um valor de 1 a 10 que melhor
              representa o seu nível de domínio.
            </p>

            {questions.map((question, index) => (
              <Card id={`${question.id}`} key={question.id} className="p-6">
                <CardHeader className="">
                  <CardTitle className="text-lg">{question.title}</CardTitle>
                  <CardDescription className="text-base">
                    {question.question}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-right text-muted-foreground">
                      Sua resposta:{" "}
                      {answers[index] === 0 ? "Nenhuma" : answers[index]}
                    </p>
                    <Slider
                      value={[answers[index]]}
                      onValueChange={(value) =>
                        handleAnswerChange(index, value)
                      }
                      max={max}
                      min={min}
                      step={step}
                      className="w-full"
                    />
                    <div className="relative flex justify-between text-xs text-muted-foreground px-1 mt-2">
                      {marks.map((mark) => (
                        <span key={mark} className="w-[1px] text-center">
                          {mark}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="text-center">
              <Button
                size="lg"
                onClick={handleSubmit}
                className="w-full text-base max-w-[400px] md:w-auto px-8"
                disabled={isSending}
              >
                {isSending ? (
                  "Enviando..."
                ) : (
                  <>
                    Ver Meus Resultados
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default QuestionarioPage;
