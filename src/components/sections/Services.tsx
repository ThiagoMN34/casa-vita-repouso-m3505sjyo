import { HeartPulse, Home, Utensils, Activity, Stethoscope, Users } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    title: 'Cuidados 24h',
    description:
      'Equipe especializada disponível dia e noite para garantir a segurança, conforto e o bem-estar dos residentes.',
    icon: HeartPulse,
  },
  {
    title: 'Hospedagem Confortável',
    description:
      'Acomodações adaptadas, seguras e aconchegantes, com design elegante e pensadas para o máximo conforto.',
    icon: Home,
  },
  {
    title: 'Nutrição Balanceada',
    description:
      'Refeições diárias preparadas com carinho e acompanhamento nutricional personalizado para cada necessidade.',
    icon: Utensils,
  },
  {
    title: 'Atividades Recreativas',
    description:
      'Programação contínua de atividades físicas e mentais para manter a vitalidade, autonomia e a alegria.',
    icon: Activity,
  },
  {
    title: 'Acompanhamento Médico',
    description:
      'Controle rigoroso de medicamentos e tratamentos, garantindo saúde e prevenção de forma contínua.',
    icon: Stethoscope,
  },
  {
    title: 'Convívio Social',
    description:
      'Ambiente familiar que estimula a socialização, a troca de experiências e a formação de novas amizades.',
    icon: Users,
  },
]

export function Services() {
  return (
    <section id="services" className="bg-gray-50/50 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Oferecemos uma estrutura completa e uma equipe multidisciplinar dedicada a proporcionar
            a melhor qualidade de vida.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="rounded-3xl border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B4D330]/10 text-[#B4D330] transition-colors group-hover:bg-[#B4D330] group-hover:text-white">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
