import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { HeartPulse, Stethoscope, Home, Utensils, Activity, Users } from 'lucide-react'

const services = [
  {
    title: 'Cuidados 24h',
    description:
      'Equipe de cuidadores e técnicos de enfermagem disponíveis 24 horas por dia, 7 dias por semana, garantindo assistência contínua.',
    icon: HeartPulse,
  },
  {
    title: 'Acompanhamento Médico',
    description:
      'Visitas médicas regulares e acompanhamento rigoroso da saúde de cada residente para prevenir e tratar qualquer condição.',
    icon: Stethoscope,
  },
  {
    title: 'Hospedagem Permanente',
    description:
      'Um verdadeiro lar com conforto, segurança e uma infraestrutura adaptada para as necessidades da terceira idade.',
    icon: Home,
  },
  {
    title: 'Nutrição Especializada',
    description:
      'Cardápios balanceados elaborados por nutricionistas, respeitando as restrições e preferências alimentares.',
    icon: Utensils,
  },
  {
    title: 'Fisioterapia e Reabilitação',
    description:
      'Sessões focadas na manutenção e recuperação da capacidade motora, promovendo maior autonomia e qualidade de vida.',
    icon: Activity,
  },
  {
    title: 'Convívio Social',
    description:
      'Atividades recreativas, oficinas de memória e eventos que estimulam a socialização e o bem-estar mental e emocional.',
    icon: Users,
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nossos Serviços</h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos uma estrutura completa de atendimento multidisciplinar, pensada em cada
            detalhe para promover saúde e alegria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="rounded-2xl border-none shadow-lg hover:shadow-xl transition-shadow bg-primary/5"
            >
              <CardHeader>
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
