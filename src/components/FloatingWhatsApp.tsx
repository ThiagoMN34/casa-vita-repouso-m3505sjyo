import { MessageCircle } from 'lucide-react'
import { trackWhatsAppClick } from '@/lib/tracking'
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    trackWhatsAppClick()
    window.open('https://wa.me/5511981182882', '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        'fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none',
      )}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="font-semibold hidden sm:inline-block">Fale Conosco</span>
    </button>
  )
}
