import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

interface QuestionCardProps {
  index: number;
  question: { id: number; title: string; question: string };
  value: number;
  onChange: (index: number, value: number[]) => void;
  marks: number[];
  min: number;
  max: number;
  step: number;
}

export function QuestionCard({
  index,
  question,
  value,
  onChange,
  marks,
  min,
  max,
  step,
}: QuestionCardProps) {
  return (
    <Card id={`${question.id}`} className="p-6">
      <CardHeader>
        <CardTitle className="text-lg">{question.title}</CardTitle>
        <CardDescription className="text-base">
          {question.question}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-right text-muted-foreground">
            Sua resposta: {value === 0 ? "Nenhuma" : value}
          </p>
          <Slider
            value={[value]}
            onValueChange={(val) => onChange(index, val)}
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
  );
}
