import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Gallery } from '@/components/sections/Gallery'
import { Team } from '@/components/sections/Team'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-slate-50">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Team />
      <FAQ />
      <CTA />
    </div>
  )
}
