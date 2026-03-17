import { Button } from '@/components/ui/button'
import { openWhatsApp } from '@/lib/tracking'
import { ArrowRight, HeartPulse } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-secondary/40 pt-16 md:pt-24 pb-32">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 space-y-8 text-center lg:text-left z-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full font-semibold text-sm mb-2 shadow-sm">
            <HeartPulse className="h-4 w-4" />
            Cuidado humanizado e especializado
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.15]">
            O conforto do lar com a{' '}
            <span className="text-primary relative inline-block">
              segurança
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-primary/30"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="transparent"
                />
              </svg>
            </span>{' '}
            que eles merecem.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            A Casa Vita oferece um ambiente alegre, acolhedor e com profissionais dedicados 24 horas
            por dia para garantir a qualidade de vida e o bem-estar do seu familiar.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
            <Button
              size="lg"
              className="rounded-full w-full sm:w-auto text-base h-14 px-8 bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg"
              onClick={openWhatsApp}
            >
              Solicitar Informações <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full w-full sm:w-auto text-base h-14 px-8 bg-white border-2 hover:bg-muted"
              asChild
            >
              <a href="#about">Conheça nossa estrutura</a>
            </Button>
          </div>
        </div>

        <div className="flex-1 w-full max-w-xl lg:max-w-none relative animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-[2.5rem] transform rotate-3 scale-105" />
          <img
            src="https://img.usecurling.com/p/800/800?q=happy%20elderly%20caregiver&dpr=2"
            alt="Profissional cuidando de idosa feliz"
            className="rounded-[2.5rem] shadow-elevation relative z-10 object-cover w-full aspect-square md:aspect-[4/3] lg:aspect-square"
          />

          <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-3xl shadow-elevation flex items-center gap-5 animate-float">
            <div className="bg-primary/10 p-4 rounded-2xl">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold text-foreground text-lg">Assistência 24h</p>
              <p className="text-muted-foreground">Equipe multiprofissional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
