import { MessageCircle } from 'lucide-react'
import { trackWhatsAppClick } from '@/lib/tracking'

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
      <MessageCircle className="h-8 w-8 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
    </a>
  )
}
