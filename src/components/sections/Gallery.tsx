export function Gallery() {
  const images = [
    'https://img.usecurling.com/p/600/400?q=living%20room%20cozy',
    'https://img.usecurling.com/p/600/400?q=healthy%20food',
    'https://img.usecurling.com/p/600/400?q=elderly%20activities',
    'https://img.usecurling.com/p/600/400?q=garden%20sunny',
    'https://img.usecurling.com/p/600/400?q=bedroom%20comfortable',
    'https://img.usecurling.com/p/600/400?q=senior%20care',
  ]

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Conheça Nosso Espaço
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Ambientes amplos, modernos e planejados para oferecer máximo conforto e segurança.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-3xl aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={src}
                alt={`Galeria Casa Vita ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
