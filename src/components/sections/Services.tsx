import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Activity, Heart, Coffee, Users, Stethoscope, Sparkles } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: 'Enfermagem 24h',
      description:
        'Equipe de enfermagem presente 24 horas por dia para garantir cuidados contínuos e administração correta de medicamentos.',
      icon: Heart,
    },
    {
      title: 'Acompanhamento Médico',
      description:
        'Visitas médicas regulares para avaliação da saúde e atualização dos planos de cuidado de cada residente.',
      icon: Stethoscope,
    },
    {
      title: 'Nutrição Especializada',
      description:
        'Cardápios desenvolvidos por nutricionistas, respeitando as restrições e necessidades individuais de alimentação.',
      icon: Coffee,
    },
    {
      title: 'Fisioterapia',
      description:
        'Sessões de fisioterapia preventiva e de reabilitação para manter a mobilidade, equilíbrio e autonomia.',
      icon: Activity,
    },
    {
      title: 'Terapia Ocupacional',
      description:
        'Atividades que estimulam a cognição, coordenação motora fina e o bem-estar psicológico contínuo.',
      icon: Sparkles,
    },
    {
      title: 'Lazer e Socialização',
      description:
        'Eventos diários, comemorações e espaços de convivência que promovem a interação social e a alegria coletiva.',
      icon: Users,
    },
  ]

  return (
    <section id="services" className="bg-secondary/30 py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Cuidado integral e multidisciplinar
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos uma gama completa de serviços de saúde e bem-estar para garantir que cada
            residente tenha a atenção exata que precisa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="border-none shadow-sm hover:shadow-elevation transition-all duration-300 group bg-white rounded-3xl overflow-hidden"
              >
                <CardHeader className="p-8 pb-4">
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <CardDescription className="text-base text-muted-foreground/90 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
