import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary/5 pt-16 pb-8 border-t border-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2">
              <img
                src="https://img.usecurling.com/i?q=leaf&shape=lineal-color&color=green"
                alt="Casa Vita Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold text-primary">Casa Vita</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Um ambiente acolhedor, com infraestrutura moderna e equipe especializada para garantir
              qualidade de vida, segurança e bem-estar aos nossos residentes.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg text-foreground">Links Úteis</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#equipe"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Nossa Equipe
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg text-foreground">Serviços</h3>
            <ul className="flex flex-col gap-2">
              <li className="text-muted-foreground text-sm">Hospedagem Permanente</li>
              <li className="text-muted-foreground text-sm">Hospedagem Temporária</li>
              <li className="text-muted-foreground text-sm">Cuidados 24h</li>
              <li className="text-muted-foreground text-sm">Reabilitação Motora</li>
              <li className="text-muted-foreground text-sm">Acompanhamento Médico</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg text-foreground">Contato</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">
                  Rua Doutor Diogo de Faria, 753
                  <br />
                  Vila Clementino, São Paulo - SP
                  <br />
                  CEP: 04037-002
                </span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm">
                  (11) 5081-5421
                  <br />
                  (11) 98118-2882
                </span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm">contato@casavita.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Casa Vita Repouso. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
