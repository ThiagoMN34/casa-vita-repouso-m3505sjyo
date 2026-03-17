import { Button } from '@/components/ui/button'
import { ArrowRight, Heart } from 'lucide-react'
import posterImg from '@/assets/poster-b2fef.jpg'
import { trackWhatsAppClick } from '@/lib/tracking'

export function Hero() {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick()
    window.open('https://wa.me/5511981182882', '_blank')
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary/5 pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src={posterImg}
          alt="Cuidados com carinho na Casa Vita"
          className="w-full h-full object-cover object-center opacity-30 md:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent md:w-3/4 lg:w-2/3 xl:w-1/2"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-2xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Heart className="h-4 w-4 fill-primary" />
            <span className="text-sm font-semibold">Cuidado e Acolhimento</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            O lar perfeito para quem você <span className="text-primary">mais ama.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Na Casa Vita, oferecemos um ambiente moderno, seguro e cheio de vida. Nossa equipe
            especializada proporciona cuidados 24h com muito respeito, carinho e dedicação
            profissional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="rounded-2xl text-base px-8 h-14 bg-primary hover:bg-primary/90"
              onClick={handleWhatsAppClick}
            >
              Falar com um Especialista
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-2xl text-base px-8 h-14 border-primary text-primary hover:bg-primary/5 bg-white/50 backdrop-blur-sm"
              onClick={() =>
                document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Conhecer Nossos Serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
