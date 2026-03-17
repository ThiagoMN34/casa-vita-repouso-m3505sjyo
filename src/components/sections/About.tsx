import { Check } from 'lucide-react'

export function About() {
  const benefits = [
    'Ambiente seguro e monitorado',
    'Equipe multidisciplinar qualificada',
    'Atendimento humanizado',
    'Infraestrutura acessível',
    'Atividades recreativas diárias',
    'Alimentação balanceada',
  ]

  return (
    <section id="sobre" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="https://img.usecurling.com/p/800/600?q=senior%20care&color=blue"
                alt="Ambiente Casa Vita"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Muito mais que uma casa de repouso,{' '}
              <span className="text-primary">uma verdadeira família.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Casa Vita nasceu do desejo de proporcionar um envelhecimento com dignidade, respeito
              e muita alegria. Nossas instalações foram projetadas pensando exclusivamente na
              segurança e no conforto da terceira idade.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Entendemos que cada residente tem sua história, suas preferências e suas necessidades.
              Por isso, nosso atendimento é personalizado e focado no bem-estar integral físico e
              emocional.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
