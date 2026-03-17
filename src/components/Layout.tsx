import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp'

export function Layout() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-[#B4D330] selection:text-white">
      <Header />
      <main className="pt-[72px]">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
