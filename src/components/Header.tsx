import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Heart } from 'lucide-react'
import { openWhatsApp } from '@/lib/tracking'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Estrutura', href: '#gallery' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-primary font-bold text-2xl">
          <Heart className="h-8 w-8 text-primary" fill="currentColor" />
          <span>Casa Vita</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button
            onClick={openWhatsApp}
            className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Fale Conosco
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-2">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium p-3 hover:bg-muted rounded-xl transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button
            onClick={() => {
              openWhatsApp()
              setIsOpen(false)
            }}
            size="lg"
            className="w-full rounded-full mt-2"
          >
            Fale Conosco
          </Button>
        </div>
      )}
    </header>
  )
}
