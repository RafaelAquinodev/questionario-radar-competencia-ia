export const questions = [
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

export type Question = (typeof questions)[number];
