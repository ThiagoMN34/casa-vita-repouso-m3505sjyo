export const trackWhatsAppClick = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', 'conversion', {
      send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
    })
  }
  console.log('WhatsApp conversion tracked')
}
