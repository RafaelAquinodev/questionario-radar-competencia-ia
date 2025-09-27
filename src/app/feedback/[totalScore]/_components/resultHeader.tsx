interface ResultHeaderProps {
  icon: React.ReactNode;
  totalScore: string;
  level: string;
}

export function ResultHeader({ icon, totalScore, level }: ResultHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-center mb-6">{icon}</div>
      <h1 className="text-4xl font-bold text-foreground mb-4">
        Sua Pontuação: {totalScore}/80
      </h1>
      <h2 className="text-2xl font-semibold text-accent mb-6">{level}</h2>
    </div>
  );
}
