'use client'

import { AnimatedTooltip } from "@/components/ui/animated-tooltip"

interface Partner {
  id: number
  name: string
  designation: string
  image: string
}

const partners: Partner[] = [
  {
    id: 1,
    name: 'Global Ventures Ltd',
    designation: 'Investment Partner',
    image: '/images/partners/global-ventures.svg',
  },
  {
    id: 2,
    name: 'Strategic Solutions Inc',
    designation: 'Strategic Partner',
    image: '/images/partners/strategic-solutions.svg',
  },
  {
    id: 3,
    name: 'MENA Investments',
    designation: 'Investment Partner',
    image: '/images/partners/mena-investments.svg',
  },
  {
    id: 4,
    name: 'Asia Pacific Holdings',
    designation: 'Operational Partner',
    image: '/images/partners/asia-pacific.svg',
  },
  {
    id: 5,
    name: 'Tech Ventures Group',
    designation: 'Strategic Partner',
    image: '/images/partners/tech-ventures.svg',
  },
  {
    id: 6,
    name: 'Sustainable Future Corp',
    designation: 'Operational Partner',
    image: '/images/partners/sustainable-future.svg',
  },
]

export function PartnerNetwork() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Partner Network</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Collaborating with industry leaders to drive global investment success.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <AnimatedTooltip items={partners} />
        </div>
      </div>
    </section>
  )
} 