import { useState, useEffect } from 'react'
import { Menu, X, Phone, MapPin } from 'lucide-react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'Perguntas Frequentes', href: '#faq' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img
              src="https://img.usecurling.com/i?q=leaf&shape=lineal-color&color=green"
              alt="Casa Vita Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-bold text-primary">Casa Vita</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>(11) 5081-5421</span>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-border py-4 px-4 shadow-lg animate-fade-in-down">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-base font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-border flex flex-col gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-5 w-5 text-primary" />
              <span>(11) 5081-5421</span>
            </div>
            <div className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <span className="text-sm">
                Rua Doutor Diogo de Faria, 753 - Vila Clementino, São Paulo - SP
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
