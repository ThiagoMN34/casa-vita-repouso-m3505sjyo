import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Gallery from '@/components/sections/Gallery'
import CTA from '@/components/sections/CTA'

export default function Index() {
  return (
    <div className="flex flex-col gap-24 md:gap-32 pb-24">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <CTA />
    </div>
  )
}
