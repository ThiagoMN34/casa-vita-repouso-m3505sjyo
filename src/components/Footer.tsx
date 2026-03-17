import { Heart, MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="flex items-center gap-2 font-bold text-3xl">
            <Heart className="h-10 w-10" fill="currentColor" />
            <span>Casa Vita</span>
          </div>
          <p className="text-primary-foreground/80 max-w-sm text-lg leading-relaxed">
            Proporcionando qualidade de vida, conforto e cuidado humanizado para quem você mais ama.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <a
              href="#"
              className="bg-primary-foreground/10 p-3 rounded-full hover:bg-primary-foreground/20 transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="bg-primary-foreground/10 p-3 rounded-full hover:bg-primary-foreground/20 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-semibold text-xl">Contato</h4>
          <ul className="space-y-4 text-primary-foreground/90">
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0" /> (11) 9999-9999
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0" /> contato@casavita.com.br
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-semibold text-xl">Endereço</h4>
          <p className="flex items-start gap-3 text-primary-foreground/90 leading-relaxed">
            <MapPin className="h-6 w-6 shrink-0" />
            Rua das Oliveiras, 123
            <br />
            Bairro Jardim Primavera
            <br />
            São Paulo - SP
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60">
        © {new Date().getFullYear()} Casa Vita Repouso. Todos os direitos reservados.
      </div>
    </footer>
  )
}
