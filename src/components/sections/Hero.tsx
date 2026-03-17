import { Button } from '@/components/ui/button'
import { trackWhatsAppClick } from '@/lib/tracking'
import { MessageCircle } from 'lucide-react'

export function Hero() {
  const handleWhatsApp = () => {
    trackWhatsAppClick()
    window.open('https://wa.me/551137684392', '_blank')
  }

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-emerald-50/50">
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6 tracking-tight">
              Cuidado, conforto e <span className="text-emerald-600">alegria de viver</span> todos
              os dias.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Na Casa Vita, oferecemos um ambiente acolhedor e profissional para a melhor idade. Uma
              verdadeira extensão do seu lar, com assistência humanizada 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 h-14 text-lg w-full sm:w-auto shadow-xl shadow-green-600/20 transition-all hover:scale-105"
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                Fale Conosco
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-emerald-200 rounded-[3rem] rotate-3 scale-105 opacity-50 blur-lg"></div>
            <img
              src="https://img.usecurling.com/p/800/600?q=happy%20elderly%20smiling"
              alt="Idosos felizes e bem cuidados"
              className="relative rounded-[2.5rem] shadow-2xl object-cover w-full h-[400px] lg:h-[500px] border-8 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
