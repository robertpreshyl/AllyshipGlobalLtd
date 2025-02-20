'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icons } from '@/components/common/Icons'
import { investmentSectors, type InvestmentSector } from '@/lib/constants/config'

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
            {isMounted && investmentSectors.map((sector: InvestmentSector) => {
              const Icon = Icons[sector.icon as keyof typeof Icons]
              return (
                <motion.div
                  key={sector.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
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