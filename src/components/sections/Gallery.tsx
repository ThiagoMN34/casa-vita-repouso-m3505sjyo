import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function Gallery() {
  const images = [
    {
      src: 'https://img.usecurling.com/p/800/600?q=nursing%20home%20bedroom%20clean',
      alt: 'Suítes Aconchegantes',
    },
    {
      src: 'https://img.usecurling.com/p/800/600?q=elderly%20care%20living%20room',
      alt: 'Sala de Convivência',
    },
    {
      src: 'https://img.usecurling.com/p/800/600?q=beautiful%20garden%20patio',
      alt: 'Jardins e Área Externa',
    },
    {
      src: 'https://img.usecurling.com/p/800/600?q=healthy%20food%20dining%20room',
      alt: 'Refeitório Amplo',
    },
    {
      src: 'https://img.usecurling.com/p/800/600?q=physiotherapy%20room',
      alt: 'Sala de Fisioterapia',
    },
    {
      src: 'https://img.usecurling.com/p/800/600?q=elderly%20group%20activity',
      alt: 'Espaço de Atividades',
    },
  ]

  return (
    <section id="gallery" className="container mx-auto px-4 scroll-mt-32">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Nossa Estrutura</h2>
        <p className="text-lg text-muted-foreground">
          Ambientes amplos, iluminados e totalmente adaptados, projetados para oferecer segurança e
          o máximo de conforto para nossos residentes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {images.map((image, i) => (
          <div key={i} className="overflow-hidden rounded-3xl group relative shadow-subtle">
            <AspectRatio ratio={4 / 3}>
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <span className="text-white font-semibold text-xl tracking-wide">{image.alt}</span>
              </div>
            </AspectRatio>
          </div>
        ))}
      </div>
    </section>
  )
}
