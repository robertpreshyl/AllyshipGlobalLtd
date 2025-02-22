'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icons } from '@/components/common/Icons'

interface Stat {
  id: string
  label: string
  value: string
  prefix?: string
  suffix?: string
  icon: keyof typeof Icons
  description: string
}

const stats: Stat[] = [
  {
    id: 'countries',
    label: 'Global Reach',
    value: '45',
    suffix: '+',
    icon: 'mapPin',
    description: 'Countries with active investments'
  },
  {
    id: 'aum',
    label: 'Assets Under Management',
    value: '2.8',
    prefix: '$',
    suffix: 'B',
    icon: 'chartBar',
    description: 'Total value of managed investments'
  },
  {
    id: 'partners',
    label: 'Strategic Partners',
    value: '120',
    suffix: '+',
    icon: 'handshake',
    description: 'Global investment allies'
  },
  {
    id: 'projects',
    label: 'Active Projects',
    value: '85',
    suffix: '+',
    icon: 'target',
    description: 'Ongoing investment initiatives'
  }
]

export function QuickStats() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section className="relative overflow-hidden border-t bg-muted/30 py-16 lg:py-20">
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
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Global Impact in Numbers
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our reach and influence continue to grow through strategic partnerships and successful investments
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="wait">
            {isMounted && stats.map((stat, index) => {
              const Icon = Icons[stat.icon]
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg border bg-background p-8 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 translate-y--8 bg-gradient-to-br from-primary/10 to-primary/5 blur-2xl" />
                  
                  <div className="relative">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    <div className="mb-2 flex items-baseline text-3xl font-bold">
                      {stat.prefix && <span>{stat.prefix}</span>}
                      <span className="text-primary">{stat.value}</span>
                      {stat.suffix && <span className="text-xl">{stat.suffix}</span>}
                    </div>
                    
                    <h3 className="mb-2 font-heading text-lg font-semibold">
                      {stat.label}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
} 