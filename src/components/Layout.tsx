import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import FloatingWhatsApp from './FloatingWhatsApp'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen relative font-sans antialiased bg-background text-foreground selection:bg-primary/20">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
