'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icons } from '@/components/common/Icons'

interface InvestmentSector {
  id: string
  name: string
  description: string
  icon: keyof typeof Icons
}

const investmentSectors: InvestmentSector[] = [
  {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'Strategic investments in commercial and residential properties across global markets.',
    icon: 'building',
  },
  {
    id: 'energy',
    name: 'Energy & Sustainability',
    description: 'Innovative projects in renewable energy and sustainable infrastructure.',
    icon: 'zap',
  },
  {
    id: 'technology',
    name: 'Technology',
    description: 'Cutting-edge investments in AI, blockchain, and emerging technologies.',
    icon: 'cpu',
  },
  {
    id: 'trade',
    name: 'Import/Export',
    description: 'Facilitating international trade and cross-border commerce solutions.',
    icon: 'ship',
  },
]

export function InvestmentSectors() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section className="py-24">
      <div className="container">
        <h2 className="mb-12 text-center font-heading text-3xl font-bold">Investment Sectors</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
                  className="rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 font-heading text-xl font-semibold">{sector.name}</h3>
                  <p className="text-muted-foreground">{sector.description}</p>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
} 