import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { trackWhatsAppClick } from '@/lib/tracking'
import { MessageCircle, Menu, X, Heart } from 'lucide-react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsApp = () => {
    trackWhatsAppClick()
    window.open('https://wa.me/551137684392', '_blank')
  }

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Estrutura', href: '#estrutura' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-emerald-700">
          <Heart className="w-8 h-8 fill-emerald-600" />
          <span className="text-2xl font-bold tracking-tight">Casa Vita</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="text-right mr-4">
            <p className={`text-xs ${isScrolled ? 'text-slate-500' : 'text-slate-600'}`}>
              Unidade 2
            </p>
            <p className={`text-sm font-bold ${isScrolled ? 'text-slate-800' : 'text-slate-900'}`}>
              (11) 3768-4392
            </p>
          </div>
          <Button
            onClick={handleWhatsApp}
            className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 shadow-md transition-transform hover:scale-105"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-slate-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 px-4 flex flex-col gap-4 animate-fade-in-down">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-slate-700 py-2 border-b border-slate-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 pb-2">
            <p className="text-sm text-slate-500 mb-1">Central de Atendimento</p>
            <p className="text-lg font-bold text-slate-800 mb-4">(11) 3768-4392</p>
            <Button
              onClick={handleWhatsApp}
              className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full shadow-md h-12 text-lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chamar no WhatsApp
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
