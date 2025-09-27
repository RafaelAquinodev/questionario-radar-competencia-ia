interface ResultDiagnosisProps {
  diagnosis: string;
  recomendation: string[];
}

export function ResultDiagnosis({
  diagnosis,
  recomendation,
}: ResultDiagnosisProps) {
  return (
    <div>
      <p className="text-lg leading-relaxed text-pretty">{diagnosis}</p>
      <div className="text-left leading-relaxed text-pretty">
        <ul className="list-disc list-outside p-4 space-y-2">
          {recomendation.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
