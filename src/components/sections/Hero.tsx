import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import heroImage from '@/assets/poster-fefe6.jpg'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
      {/* Subtle background decoration placed at the top of the DOM structure */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />

      <div className="container relative px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-balance">
                Cuidado, Conforto e <span className="text-primary">Qualidade de Vida</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0 text-balance">
                A Casa Vita Repouso oferece um ambiente acolhedor e profissional, focado no
                bem-estar físico e emocional de quem você mais ama.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start">
              <Button size="lg" className="px-8 h-12 text-base">
                Agendar Visita
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 h-12 text-base">
                Conheça a Estrutura
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            {/* Decorative blobs */}
            <div className="absolute -top-4 -right-4 h-72 w-72 bg-primary/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 h-72 w-72 bg-blue-500/20 rounded-full blur-3xl opacity-50 pointer-events-none" />

            {/* Hero Image with custom entry animation */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border bg-muted/50 shadow-2xl animate-hero-enter">
              <img
                src={heroImage}
                alt="Idosos recebendo carinho e cuidado na Casa Vita Repouso"
                className="h-full w-full object-cover"
              />
              {/* Subtle overlay to make image pop */}
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
