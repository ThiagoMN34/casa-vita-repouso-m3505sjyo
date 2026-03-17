import videoSectionImg from '@/assets/video-section-820b3.jpg'

export function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Uma estrutura pensada para o bem-estar e convívio
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              A Casa Vita Repouso foi idealizada para oferecer não apenas cuidados médicos de
              excelência, mas qualidade de vida, convivência social e alegria para nossos
              residentes.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Nossa unidade conta com ambientes amplos, bem iluminados e adaptados para garantir
              total segurança e mobilidade. Um verdadeiro lar, cercado de verde e tranquilidade, bem
              no coração de São Paulo.
            </p>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-emerald-50 rounded-[3rem] -z-10 transform -rotate-2"></div>
            <img
              src={videoSectionImg}
              alt="Fachada arborizada da Casa Vita"
              className="rounded-[2.5rem] shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
