import {
  ChartColumnIncreasingIcon,
  FlameIcon,
  TargetIcon,
  ZapIcon,
} from "lucide-react";

export type ResultData = {
  icon: any;
  level: string;
  diagnosis: string;
  recomendation: string[];
};

export function useResult(totalScoreStr?: string): ResultData | null {
  if (!totalScoreStr) return null;
  const score = parseInt(totalScoreStr, 10);

  if (score >= 65) {
    return {
      icon: <FlameIcon className="w-16 h-16 text-foreground" />,
      level: "Estratégico / Líder de IA",
      diagnosis:
        "Une visão de negócios e profundidade técnica. Lidera projetos de IA em escala, define estratégias de inovação e orienta equipes. Consegue avaliar o impacto da IA no negócio e direcionar investimentos com base em dados e tendências.",
      recomendation: [
        "Foque em competências de liderança e gestão de mudança para conduzir iniciativas de IA em larga escala.",
        "Construa parcerias com áreas estratégicas (TI, dados, operações) para implementar IA de forma sustentável.",
        "Compartilhe seu conhecimento em palestras internas, treinamentos e mentorias para fortalecer a cultura de IA na organização.",
      ],
    };
  } else if (score >= 49) {
    return {
      icon: <ZapIcon className="w-16 h-16 text-foreground" />,
      level: "Especialista",
      diagnosis:
        "Possui domínio técnico avançado: cria prompts complexos, sabe usar diversas ferramentas (de texto, imagem e automação) e começa a estruturar soluções de IA em fluxos de trabalho. É uma referência dentro da equipe e apoia colegas na adoção de IA.",
      recomendation: [
        "Invista em aprender linguagens e frameworks para criar agentes de IA (por exemplo, LangChain, Crew AI).",
        "Desenvolva projetos-piloto que demonstrem impacto da IA no negócio.",
        "Mantenha-se atualizado com as novidades em IA generativa e participe de eventos ou conferências do setor.",
      ],
    };
  } else if (score >= 25) {
    return {
      icon: <ChartColumnIncreasingIcon className="w-16 h-16 text-foreground" />,
      level: "Praticante",
      diagnosis:
        "Já aplica recursos de IA em tarefas do dia a dia e começa a perceber como eles podem apoiar processos de trabalho. Consegue criar prompts claros e usar ferramentas de forma funcional, mas ainda não integra diferentes soluções ou constrói fluxos mais complexos.",
      recomendation: [
        "Aperfeiçoe suas habilidades em engenharia de prompt, explorando cenários mais complexos.",
        "Aprenda a automatizar tarefas simples usando plataformas no-code como n8n ou Make.",
        "Busque participar de grupos de estudo ou comunidades para trocar experiências e descobrir novas ferramentas.",
      ],
    };
  } else {
    return {
      icon: <TargetIcon className="w-16 h-16 text-foreground" />,
      level: "Explorador",
      diagnosis:
        "Está no início da jornada em IA: conhece conceitos básicos e algumas ferramentas, mas ainda não tem experiência prática consistente. Enxerga a IA como algo distante ou em fase de descoberta.",
      recomendation: [
        "Comece explorando ferramentas de IA generativa (como ChatGPT, DALL-E) para gerar conteúdo textual e visual. Experimente criar prompts simples e observe os resultados.",
        "Participe de workshops ou cursos introdutórios para aprender sobre engenharia de prompt e fluxos de trabalho.",
        "Busque feedback de colegas ou participe de grupos de estudo para trocar experiências e descobrir novas possibilidades.",
      ],
    };
  }
}
