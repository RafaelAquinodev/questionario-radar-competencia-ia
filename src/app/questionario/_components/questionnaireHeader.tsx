import { Progress } from "@/components/ui/progress";

interface QuestionnaireHeaderProps {
  completed: number;
  total: number;
  progress: number;
}
export function QuestionnaireHeader({
  completed,
  total,
  progress,
}: QuestionnaireHeaderProps) {
  return (
    <div className="mb-8 fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-sm z-10 py-4 px-6 md:px-[8%] border-b border-border">
      <div className="flex justify-between gap-4 items-center mb-4">
        <h1 className="text-2xl font-bold">Avaliação de Automação com IA</h1>
        <span className="text-sm text-muted-foreground">
          {completed} de {total} completadas
        </span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
}
