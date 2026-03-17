import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Team } from '@/components/sections/Team'
import { FAQ } from '@/components/sections/FAQ'
import { Gallery } from '@/components/sections/Gallery'
import { CTA } from '@/components/sections/CTA'

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Services />
      <Team />
      <Gallery />
      <FAQ />
      <CTA />
    </div>
  )
}
