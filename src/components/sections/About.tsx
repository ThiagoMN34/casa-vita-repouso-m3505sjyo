export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 items-center">
          <div
            className="relative order-2 lg:order-1 group animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="https://img.usecurling.com/p/800/600?q=nursing%20home%20garden"
                alt="Jardim da Casa Vita"
                className="w-full h-full object-cover animate-subtle-zoom"
              />
            </div>

            <div
              className="absolute -bottom-8 -right-8 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl z-20 hidden md:block animate-zoom-in opacity-0"
              style={{ animationDelay: '0.4s' }}
            >
              <video
                src="/accent-video-2.mp4"
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#B4D330]/20 rounded-full -z-10 blur-2xl transition-all duration-500 group-hover:scale-110"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-gray-200 rounded-full -z-10 blur-2xl transition-all duration-500 group-hover:scale-110"></div>
          </div>
          <div
            className="order-1 lg:order-2 animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.2s' }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Sobre a Casa Vita
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              A Casa Vita é uma moradia assistida para idosos focada em proporcionar um ambiente
              acolhedor, seguro e alegre. Nossa missão é oferecer qualidade de vida e bem-estar,
              respeitando a individualidade e a história de cada residente.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Contamos com uma infraestrutura completa, adaptada para garantir a mobilidade e
              segurança, além de uma equipe multidisciplinar apaixonada pelo que faz, oferecendo
              Cuidados 24h com muito carinho e dedicação.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-4 border-[#B4D330] pl-4">
                <p className="text-3xl font-bold text-gray-900">10+</p>
                <p className="text-sm font-medium text-gray-600 mt-1">Anos de Experiência</p>
              </div>
              <div className="border-l-4 border-[#B4D330] pl-4">
                <p className="text-3xl font-bold text-gray-900">100%</p>
                <p className="text-sm font-medium text-gray-600 mt-1">Dedicação e Amor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
