import ancsImg from '@/assets/ancs-f63c8.png'
import { Heart, MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 text-white mb-6">
              <Heart className="w-8 h-8 fill-emerald-500 text-emerald-500" />
              <span className="text-2xl font-bold tracking-tight">Casa Vita</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Dedicados a proporcionar a melhor qualidade de vida para quem você ama, com estrutura
              moderna e equipe qualificada.
            </p>
            <div className="bg-white/10 p-4 rounded-xl inline-block">
              <img
                src={ancsImg}
                alt="Agência Nacional de Vigilância Sanitária"
                className="h-12 object-contain filter invert opacity-80"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Unidade 2</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  Rua Heitor Penteado, 193
                  <br />
                  Sumarezinho, São Paulo - SP
                  <br />
                  05437-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>(11) 3768-4392</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>contato@casavita.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Links Úteis</h3>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="hover:text-emerald-400 transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-emerald-400 transition-colors">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#estrutura" className="hover:text-emerald-400 transition-colors">
                  Estrutura
                </a>
              </li>
              <li>
                <a href="#equipe" className="hover:text-emerald-400 transition-colors">
                  Nossa Equipe
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Horário de Visitas</h3>
            <p className="text-slate-400 mb-4">
              Aberto todos os dias
              <br />
              das 10h às 17h.
            </p>
            <p className="text-sm text-slate-500">
              * Para visitas fora do horário comercial, favor entrar em contato antecipadamente.
            </p>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Casa Vita Repouso. Todos os direitos reservados.</p>
          <p>Responsável Técnico: Dra. Ana Lúcia - CRM-SP 123456</p>
        </div>
      </div>
    </footer>
  )
}
