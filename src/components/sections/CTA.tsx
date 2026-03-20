import { Button } from '@/components/ui/button'
import { trackWhatsAppClick } from '@/lib/tracking'
import { MessageCircle } from 'lucide-react'

export function CTA() {
  return (
    <section className="bg-[#B4D330] py-16 sm:py-24 relative overflow-hidden rounded-t-[3rem]">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay">
        <video
          src="/bg-cta-decor.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 opacity-10 bg-[url('https://img.usecurling.com/p/800/600?q=pattern')] bg-cover mix-blend-overlay"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center animate-zoom-in">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Venha nos fazer uma visita
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90">
            Estamos de portas abertas para receber você e sua família. Agende uma visita e conheça
            de perto o carinho e a estrutura elegante que oferecemos.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <a
              href="https://wa.me/5511973651777"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppClick}
            >
              <Button
                size="lg"
                className="rounded-full bg-white text-[#B4D330] hover:bg-gray-50 px-8 py-7 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105 group"
              >
                <MessageCircle className="mr-2 h-6 w-6 group-hover:text-[#25D366] transition-colors" />
                Agendar pelo WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
