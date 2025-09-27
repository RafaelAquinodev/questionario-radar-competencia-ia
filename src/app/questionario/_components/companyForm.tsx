import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface CompanyFormProps {
  company: string;
  setCompany: (name: string) => void;
}
export function CompanyForm({ company, setCompany }: CompanyFormProps) {
  return (
    <Card className="p-6">
      <CardContent>
        <Label htmlFor="assessmentCompany" className="text-base font-semibold">
          Empresa
        </Label>
        <Input
          required
          id="assessmentCompany"
          type="text"
          placeholder="Digite o nome da sua empresa"
          value={company}
          maxLength={30}
          autoComplete="off"
          onChange={(e) => setCompany(e.target.value)}
          className="mt-2 border border-border"
        />
      </CardContent>
    </Card>
  );
}
