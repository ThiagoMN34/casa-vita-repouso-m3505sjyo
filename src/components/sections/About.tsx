import { CheckCircle } from 'lucide-react'

export default function About() {
  const benefits = [
    'Ambiente totalmente adaptado e seguro',
    'Alimentação balanceada por nutricionistas',
    'Atividades cognitivas e recreativas diárias',
    'Acompanhamento médico contínuo',
  ]

  return (
    <section id="about" className="container mx-auto px-4 scroll-mt-32">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/50 rounded-full -z-10 blur-3xl" />
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <img
              src="https://img.usecurling.com/p/400/500?q=beautiful%20nursing%20home%20garden&dpr=2"
              alt="Jardim da casa de repouso"
              className="rounded-[2rem] w-full h-full object-cover shadow-lg translate-y-8 md:translate-y-12"
            />
            <img
              src="https://img.usecurling.com/p/400/500?q=elderly%20having%20tea&dpr=2"
              alt="Idosos socializando"
              className="rounded-[2rem] w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Muito mais que uma casa de repouso,{' '}
              <span className="text-primary">uma verdadeira família.</span>
            </h2>
          </div>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              A Casa Vita nasceu com a missão de transformar o conceito de hospedagem para idosos.
              Acreditamos que esta fase da vida deve ser vivida com alegria, dignidade e muito
              carinho.
            </p>
            <p>
              Nossa estrutura foi cuidadosamente planejada para oferecer segurança total sem perder
              o aconchego de um lar, estimulando a convivência e a qualidade de vida dos nossos
              residentes diariamente.
            </p>
          </div>

          <ul className="space-y-5 pt-2">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-center gap-4 bg-secondary/30 p-4 rounded-2xl">
                <CheckCircle className="h-7 w-7 text-primary shrink-0" />
                <span className="text-foreground font-medium text-lg">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
