"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const StartButton = () => {
  const router = useRouter();

  return (
    <Button
      size="lg"
      className="text-lg px-8 py-6 w-full md:w-auto max-w-[400px]"
      onClick={() => {
        router.push("/questionario");
      }}
    >
      Iniciar a Avaliação
      <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  );
};

export default StartButton;
