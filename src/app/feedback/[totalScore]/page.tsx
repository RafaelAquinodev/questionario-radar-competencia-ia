"use client";
import { Card, CardContent } from "@/components/ui/card";
import PageContainer from "../../_components/page-container";
import { Button } from "@/components/ui/button";
import { redirect, useParams } from "next/navigation";
import Link from "next/link";
import { useResult } from "./_hooks/useResult";
import { ResultHeader } from "./_components/resultHeader";
import { ResultDiagnosis } from "./_components/resultDiagnosis";

const FeedbackPage = () => {
  const params = useParams<{ totalScore: string }>();

  const result = useResult(params.totalScore);
  if (!result) {
    redirect("/");
    return null;
  }

  return (
    <PageContainer className="relative overflow-hidden md:justify-start">
      <div className="absolute inset-0 lg:bg-[url('/fundo1.svg')] bg-cover bg-center filter blur-md z-0" />
      <div className="max-w-4xl mx-auto md:mx-[4%] text-center relative z-10">
        <ResultHeader
          icon={result.icon}
          totalScore={params.totalScore}
          level={result.level}
        />
        <Card className="max-w-3xl mx-auto mb-8 md:backdrop-blur-sm">
          <CardContent className="p-6 md:p-8">
            <ResultDiagnosis
              diagnosis={result.diagnosis}
              recomendation={result.recomendation}
            />
          </CardContent>
        </Card>
        <div className="flex justify-center gap-4">
          <Button variant="secondary" className="text-lg px-8 py-6" asChild>
            <Link href="/">Voltar para o início</Link>
          </Button>
        </div>
      </div>
    </PageContainer>
  );
};

export default FeedbackPage;
