export function Gallery() {
  const images = [
    'https://img.usecurling.com/p/600/400?q=senior%20activities&color=orange',
    'https://img.usecurling.com/p/600/400?q=nursing%20home%20garden',
    'https://img.usecurling.com/p/600/400?q=elderly%20care%20room',
    'https://img.usecurling.com/p/600/400?q=senior%20dining&color=green',
    'https://img.usecurling.com/p/600/400?q=physical%20therapy%20elderly',
    'https://img.usecurling.com/p/600/400?q=happy%20senior%20people&color=blue',
  ]

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nossos Ambientes</h2>
          <p className="text-lg text-muted-foreground">
            Conheça um pouco das nossas instalações, preparadas com carinho para oferecer o máximo
            de conforto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={src}
                alt={`Galeria Casa Vita ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium px-4 py-2 border-2 border-white rounded-full">
                  Ver Ampliado
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
