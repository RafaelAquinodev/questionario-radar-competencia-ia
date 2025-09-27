import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export interface Question {
  id: number;
  title: string;
  question: string;
}
export interface FormData {
  company: string;
}
export function useQuestionnaire(questions: Question[]) {
  const [formData, setFormData] = useState<FormData>({ company: "" });
  const [answers, setAnswers] = useState<number[]>(
    new Array(questions.length).fill(0)
  );
  const [isSending, setIsSending] = useState(false);
  const router = useRouter();

  const min = 0,
    max = 10,
    step = 1;
  const marks = Array.from({ length: max - min + 1 }, (_, i) => i + min);

  const progress =
    (answers.filter((answer) => answer !== 0).length / questions.length) * 100;

  const handleAnswerChange = (index: number, value: number[]) => {
    const newAnswers = [...answers];
    newAnswers[index] = value[0];
    setAnswers(newAnswers);
  };

  const resposta = questions.map((q) => ({
    pergunta: q.id,
    resposta: answers[q.id - 1],
  }));

  const totalScore = answers.reduce((acc, curr) => acc + curr, 0);

  const handleSubmit = async () => {
    if (isSending) return;
    if (!formData.company) {
      router.push(`/questionario/#0`);
      toast.error("Por favor, insira o nome da empresa.");
      return;
    }
    if (answers.some((ans) => ans === 0)) {
      router.push(`/questionario/#${answers.findIndex((ans) => ans === 0)}`);
      toast.error("Por favor, responda todas as perguntas.");
      return;
    }
    setIsSending(true);
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          answers: resposta,
          company: formData.company,
        }),
      });
      if (response.ok) {
        toast.success("Respostas enviadas com sucesso!");
        router.push(`/feedback/${totalScore}`);
        setAnswers(new Array(questions.length).fill(0));
      } else {
        toast.error("Erro ao enviar as respostas. Tente novamente.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro ao enviar as respostas.");
    } finally {
      setIsSending(false);
    }
  };

  return {
    formData,
    setFormData,
    answers,
    setAnswers,
    isSending,
    min,
    max,
    step,
    marks,
    progress,
    handleAnswerChange,
    handleSubmit,
    totalScore,
  };
}
