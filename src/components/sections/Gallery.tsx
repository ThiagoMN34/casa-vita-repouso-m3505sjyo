import barraUnidade2Img from '@/assets/barra_unidade2-dda45.jpg'

export function Gallery() {
  return (
    <section id="estrutura" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Nossa Estrutura</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Conheça as instalações da Casa Vita. Ambientes limpos, organizados, iluminados e
            totalmente adaptados para o conforto e segurança dos residentes.
          </p>
        </div>
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-slate-50">
          <img
            src={barraUnidade2Img}
            alt="Ambientes internos e externos da Casa Vita Unidade 2"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}
