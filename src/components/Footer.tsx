import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import logoUrl from '@/assets/casavita_300rgb-1-1738e.jpg'

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img className="h-16 w-auto object-contain" src={logoUrl} alt="Casa Vita" />
            <p className="text-sm leading-6 text-gray-600 max-w-xs">
              Moradia assistida para idosos, proporcionando qualidade de vida, segurança e muito
              carinho em um ambiente alegre e acolhedor.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#B4D330] transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#B4D330] transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900">Links Rápidos</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <a
                    href="#about"
                    className="text-sm leading-6 text-gray-600 hover:text-[#B4D330] transition-colors"
                  >
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-sm leading-6 text-gray-600 hover:text-[#B4D330] transition-colors"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="text-sm leading-6 text-gray-600 hover:text-[#B4D330] transition-colors"
                  >
                    Nossa Equipe
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-sm leading-6 text-gray-600 hover:text-[#B4D330] transition-colors"
                  >
                    Dúvidas Frequentes
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900">Contato</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#B4D330] shrink-0 mt-0.5" />
                  <span className="text-sm leading-6 text-gray-600">
                    Rua Correia Dias, 134 - Paraíso
                    <br />
                    São Paulo - SP
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#B4D330] shrink-0" />
                  <a
                    href="tel:+5511999999999"
                    className="text-sm leading-6 text-gray-600 hover:text-[#B4D330] transition-colors"
                  >
                    (11) 99999-9999
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#B4D330] shrink-0" />
                  <a
                    href="mailto:contato@casavita.com.br"
                    className="text-sm leading-6 text-gray-600 hover:text-[#B4D330] transition-colors"
                  >
                    contato@casavita.com.br
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-100 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Casa Vita. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
