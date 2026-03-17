import { Button } from '@/components/ui/button'
import { openWhatsApp } from '@/lib/tracking'
import { MessageCircle } from 'lucide-react'

export default function CTA() {
  return (
    <section className="container mx-auto px-4">
      <div className="bg-primary rounded-[3rem] p-10 md:p-20 text-center text-primary-foreground relative overflow-hidden shadow-elevation">
        <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/1200/400?q=abstract%20smooth%20shapes&color=cyan')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Venha conhecer a Casa Vita e descubra o melhor lugar para quem você ama.
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Agende uma visita sem compromisso ou tire suas dúvidas diretamente com nossa equipe de
            atendimento especializado pelo WhatsApp.
          </p>
          <div className="pt-4">
            <Button
              size="lg"
              className="rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-lg h-16 px-10 shadow-lg hover:scale-105 transition-all duration-300"
              onClick={openWhatsApp}
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Agendar Visita via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
