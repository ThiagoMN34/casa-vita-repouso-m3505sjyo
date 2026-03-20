import { Button } from '@/components/ui/button'
import { trackWhatsAppClick } from '@/lib/tracking'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          src="/bg-hero-decor.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="w-full h-full object-cover opacity-[0.03] mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#B4D330]/5 to-transparent" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl leading-tight">
              Alegria, carinho e <span className="text-[#B4D330]">qualidade de vida</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Na Casa Vita, oferecemos uma moradia assistida com foco no bem-estar e na segurança de
              quem você ama. Nossa equipe especializada proporciona cuidados diários em um ambiente
              acolhedor e cheio de vida.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="https://wa.me/5511973651777"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppClick}
              >
                <Button
                  size="lg"
                  className="rounded-full bg-[#B4D330] hover:bg-[#a0bc2a] text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Fale pelo WhatsApp
                </Button>
              </a>
              <a
                href="#about"
                className="text-base font-semibold leading-6 text-gray-900 hover:text-[#B4D330] transition-colors px-4 py-2"
              >
                Conheça a Casa Vita <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none group animate-zoom-in">
            <div
              className="absolute -left-6 md:-left-12 top-1/4 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl z-20 animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.5s' }}
            >
              <video
                src="/accent-video-1.mp4"
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#B4D330]/20 rounded-full blur-3xl -z-10 transition-all duration-500 group-hover:bg-[#B4D330]/30" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="/poster-b2fef.jpg"
                onError={(e) => {
                  e.currentTarget.onerror = null
                  e.currentTarget.src = 'https://img.usecurling.com/p/800/600?q=joyful%20seniors'
                }}
                alt="Idosos felizes e sorridentes na Casa Vita"
                className="w-full h-[500px] object-cover animate-subtle-zoom"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-gray-900/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
