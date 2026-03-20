import { Card } from '@/components/ui/card'

const team = [
  {
    name: 'Thiago',
    role: 'Diretor',
    image: '/foto_thiago-c3243.png',
    fallback: 'https://img.usecurling.com/ppl/large?gender=male&seed=thiago',
    description:
      'Com vasta experiência na gestão de moradias assistidas, Thiago dedica-se a proporcionar o melhor ambiente, conforto e atendimento acolhedor para todos os residentes da Casa Vita.',
  },
  {
    name: 'Luis',
    role: 'Diretor Clínico',
    image: '/foto_luis.jpg',
    fallback: 'https://img.usecurling.com/ppl/large?gender=male&seed=luis',
    description:
      'Responsável por garantir que todas as necessidades de saúde e bem-estar sejam atendidas com excelência, coordenando nossos Cuidados 24h com muito carinho e empatia.',
  },
]

export function Team() {
  return (
    <section id="team" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.02]">
        <video
          src="/bg-team-decor.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl animate-fade-in-up">
            Nossa Equipe
          </h2>
          <p
            className="mt-4 text-lg text-gray-600 animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.1s' }}
          >
            Conheça os profissionais dedicados que fazem da Casa Vita um verdadeiro lar para quem
            você ama.
          </p>
        </div>
        <div className="mx-auto max-w-4xl grid grid-cols-1 gap-10 sm:grid-cols-2">
          {team.map((member, index) => (
            <Card
              key={member.name}
              className="overflow-hidden border-none shadow-lg rounded-3xl hover:shadow-2xl transition-all duration-300 group animate-zoom-in opacity-0"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="aspect-[4/5] relative overflow-hidden rounded-3xl bg-gray-100">
                <img
                  src={member.image}
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = member.fallback
                  }}
                  alt={`Retrato de ${member.name}, ${member.role} da Casa Vita`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-3xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-[#B4D330] font-semibold mb-4 text-lg">{member.role}</p>
                  <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {member.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
