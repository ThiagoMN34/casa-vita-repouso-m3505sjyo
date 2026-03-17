import { trackWhatsAppClick } from '@/lib/tracking'
import { MessageCircle } from 'lucide-react'

export function FloatingWhatsApp() {
  const handleWhatsApp = () => {
    trackWhatsAppClick()
    window.open('https://wa.me/551137684392', '_blank')
  }

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 animate-fade-in-up"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </button>
  )
}
