import { Button } from '@/components/ui/button'
import { trackWhatsAppClick } from '@/lib/tracking'
import { MessageCircle } from 'lucide-react'

export function CTA() {
  const handleWhatsApp = () => {
    trackWhatsAppClick()
    window.open('https://wa.me/551137684392', '_blank')
  }

  return (
    <section className="py-24 bg-emerald-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/1200/400?q=leaves%20pattern&color=green')] opacity-10 mix-blend-overlay object-cover w-full h-full"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
          Pronto para oferecer o melhor para quem você ama?
        </h2>
        <p className="text-emerald-50 text-xl mb-10 max-w-2xl mx-auto font-light">
          Entre em contato agora mesmo e agende uma visita. Nossa equipe está sempre pronta para
          ouvir você e tirar todas as suas dúvidas.
        </p>
        <Button
          onClick={handleWhatsApp}
          size="lg"
          className="bg-white text-emerald-600 hover:bg-emerald-50 rounded-full px-10 h-16 text-lg shadow-2xl hover:scale-105 transition-transform"
        >
          <MessageCircle className="mr-3 h-6 w-6" />
          Falar pelo WhatsApp
        </Button>
      </div>
    </section>
  )
}
