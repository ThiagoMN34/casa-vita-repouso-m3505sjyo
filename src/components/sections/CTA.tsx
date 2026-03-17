import { Button } from '@/components/ui/button'
import { Phone, Calendar } from 'lucide-react'
import { trackWhatsAppClick } from '@/lib/tracking'

export function CTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-10 md:p-16 text-center text-primary-foreground shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Venha conhecer a Casa Vita</h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Agende uma visita e descubra por que somos a escolha número um das famílias que buscam
            excelência em cuidados e qualidade de vida.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full bg-white text-primary hover:bg-white/90 h-14 px-8 text-base font-semibold"
              onClick={() => {
                trackWhatsAppClick()
                window.open('https://wa.me/5511981182882', '_blank')
              }}
            >
              <Phone className="mr-2 h-5 w-5" />
              Agendar via WhatsApp
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto rounded-full border-white text-white hover:bg-white/10 h-14 px-8 text-base font-semibold bg-transparent"
              onClick={() =>
                document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <Calendar className="mr-2 h-5 w-5" />
              Saber Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
