declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export function openWhatsApp() {
  if (typeof window !== 'undefined') {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-123456789/WhatsAppContact',
      })
    }
    console.log('Tracked conversion to Google Ads')
    window.open(
      'https://wa.me/5511999999999?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20informa%C3%A7%C3%B5es%20sobre%20a%20Casa%20Vita%20Repouso.',
      '_blank',
      'noopener,noreferrer',
    )
  }
}
