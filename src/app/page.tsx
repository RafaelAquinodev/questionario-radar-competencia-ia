import PageContainer from "./componentes/page-container";
import { BarChart3, CheckCircle, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import StartButton from "./componentes/start-button";

const Home = () => {
  return (
    <PageContainer className="bg-[url('/fundo2.svg')] bg-cover bg-bottom">
      {/* // <PageContainer> */}
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto text-center gap-8">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Radar de Competências em Inteligência Artificial
          </h1>
          <div className="space-y-4">
            <p className="md:text-xl text-pretty text-muted-foreground max-w-[40ch] md:max-w-[65ch] mx-auto">
              Responda 8 perguntas rápidas para mapear seu nível de conhecimento
              em ferramentas de IA e identificar oportunidades de crescimento e
              automação.
            </p>
            <p className="md:text-xl text-muted-foreground text-pretty max-w-[39ch] md:max-w-[64ch] mx-auto">
              Descubra em menos de 2 minutos como está sua preparação para
              acompanhar a evolução desse campo dinâmico e receba um diagnóstico
              gratuito e instantâneo.
            </p>
          </div>
        </div>

        <Card className="max-w-[400px] md:max-w-2xl w-full mx-auto">
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <CheckCircle className="h-12 w-12 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Avaliação Rápida</h3>
                <p className="text-sm text-muted-foreground">
                  8 perguntas, 2 minutos
                </p>
              </div>
              <div className="flex flex-col items-center">
                <BarChart3 className="h-12 w-12 text-accent mb-3" />
                <h3 className="font-semibold mb-2">Resultados Instantâneos</h3>
                <p className="text-sm text-muted-foreground">
                  Diagnóstico personalizado
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Target className="h-12 w-12 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Insights Acionáveis</h3>
                <p className="text-sm text-muted-foreground">
                  Próximos passos claros
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <StartButton />
      </div>
    </PageContainer>
  );
};

export default Home;
