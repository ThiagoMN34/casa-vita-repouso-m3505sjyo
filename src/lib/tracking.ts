export const trackConversion = (eventName: string, data?: any) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', eventName, data)
  }
  console.log(`Conversion tracked: ${eventName}`, data)
}

export const trackWhatsAppClick = () => {
  trackConversion('conversion', {
    send_to: 'AW-CONVERSION_ID/whatsapp_click',
    value: 1.0,
    currency: 'BRL',
  })
}
