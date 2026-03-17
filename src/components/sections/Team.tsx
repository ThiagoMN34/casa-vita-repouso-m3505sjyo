import { Card, CardContent } from '@/components/ui/card'
import thiagoImg from '@/assets/foto_thiago-c3243.png'
import luisImg from '@/assets/foto_luis-8c5cf.png'

const team = [
  {
    name: 'Thiago Pereira',
    role: 'Sócio Diretor',
    description:
      'Administrador de Empresas, atua na gestão da Casa Vita focando no bem-estar dos residentes e na excelência do atendimento, garantindo um ambiente acolhedor e eficiente.',
    image: thiagoImg,
  },
  {
    name: 'Luis Pereira',
    role: 'Sócio Diretor',
    description:
      'Médico e responsável técnico pela Casa Vita, garantindo que todos os padrões de saúde e cuidados sejam rigorosamente seguidos com humanização e segurança.',
    image: luisImg,
  },
]

export function Team() {
  return (
    <section id="equipe" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nossa Liderança</h2>
          <p className="text-lg text-muted-foreground">
            Uma gestão familiar e profissional dedicada a oferecer o mais alto padrão de qualidade
            em cuidados para idosos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <Card
              key={index}
              className="rounded-2xl overflow-hidden border-none shadow-lg bg-white"
            >
              <CardContent className="p-0 flex flex-col sm:flex-row h-full">
                <div className="sm:w-2/5 p-6 flex justify-center items-center bg-primary/5">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="sm:w-3/5 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
