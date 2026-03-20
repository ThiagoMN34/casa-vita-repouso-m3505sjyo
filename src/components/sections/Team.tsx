import { Card, CardContent } from '@/components/ui/card'
import thiagoPhoto from '@/assets/foto_thiago-5d841.png'
import luisPhoto from '@/assets/foto_luis-9deef.png'

const team = [
  {
    name: 'Thiago',
    role: 'Diretor Clínico',
    image: thiagoPhoto,
    description:
      'Médico especialista dedicado ao acompanhamento contínuo e preventivo dos nossos residentes.',
  },
  {
    name: 'Luis',
    role: 'Coordenador de Enfermagem',
    image: luisPhoto,
    description:
      'Enfermeiro chefe responsável por garantir excelência, segurança e conforto no dia a dia.',
  },
]

export function Team() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nossa Equipe de Especialistas
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg/relaxed mx-auto text-balance">
              Profissionais dedicados e altamente qualificados, comprometidos com o bem-estar e a
              saúde integral dos nossos residentes.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
          {team.map((member) => (
            <Card key={member.name} className="border-none shadow-none bg-transparent">
              <CardContent className="flex flex-col items-center space-y-4 p-0">
                <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-background shadow-xl mb-4 group">
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                  <img
                    src={member.image}
                    alt={`Foto de ${member.name}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-2xl font-bold tracking-tight">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-muted-foreground pt-2 max-w-sm mx-auto">
                    {member.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
