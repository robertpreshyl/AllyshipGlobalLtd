'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icons } from '@/components/common/Icons'
import Link from 'next/link'

interface InvestmentSector {
  id: string
  name: string
  description: string
  icon: keyof typeof Icons
  href: string
}

const investmentSectors: InvestmentSector[] = [
  {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'Strategic investments in commercial and residential properties across global markets.',
    icon: 'building',
    href: '/portfolio/real-estate',
  },
  {
    id: 'energy',
    name: 'Energy & Sustainability',
    description: 'Innovative projects in renewable energy and sustainable infrastructure.',
    icon: 'zap',
    href: '/portfolio/energy',
  },
  {
    id: 'technology',
    name: 'Technology',
    description: 'Cutting-edge investments in AI, blockchain, and emerging technologies.',
    icon: 'cpu',
    href: '/portfolio/technology',
  },
  {
    id: 'trade',
    name: 'Import/Export',
    description: 'Facilitating international trade and cross-border commerce solutions.',
    icon: 'ship',
    href: '/portfolio/trade',
  },
]

export function InvestmentSectors() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-muted/30 py-24 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-primary/5" />

      <div className="container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Investment Sectors
          </h2>
          <p className="mt-4 text-muted-foreground">
            Diversified investment opportunities across key global sectors
          </p>
        </motion.div>

        {/* Sectors Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="wait">
            {isMounted && investmentSectors.map((sector, index) => {
              const Icon = Icons[sector.icon]
              return (
                <motion.div
                  key={sector.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={sector.href}
                    className="group block rounded-2xl bg-background p-8 shadow-sm transition-all hover:bg-primary hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-white/10 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 font-heading text-xl font-semibold text-foreground transition-colors group-hover:text-white">
                      {sector.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground transition-colors group-hover:text-white/80">
                      {sector.description}
                    </p>
                    <div className="mt-6 flex items-center text-sm text-primary transition-colors group-hover:text-white">
                      <span className="font-medium">Learn more</span>
                      <Icons.arrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
} 