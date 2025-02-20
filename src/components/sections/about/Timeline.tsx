'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TimelineEvent {
  year: string
  title: string
  description: string
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '2018',
    title: 'Foundation',
    description: 'Allyship Global Limited was established with a vision to unite international investors.',
  },
  {
    year: '2019',
    title: 'First Major Partnership',
    description: 'Launched our first cross-border investment partnership in the real estate sector.',
  },
  {
    year: '2020',
    title: 'Digital Expansion',
    description: 'Ventured into technology investments and cryptocurrency markets.',
  },
  {
    year: '2021',
    title: 'Energy Innovation',
    description: 'Expanded portfolio to include sustainable energy projects across three continents.',
  },
  {
    year: '2022',
    title: 'Global Recognition',
    description: 'Recognized by leading financial institutions for innovative investment approaches.',
  },
  {
    year: '2023',
    title: 'Strategic Growth',
    description: 'Reached $2.5B in assets under management with presence in 25+ countries.',
  },
]

export function Timeline() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="relative">
      {/* Center Line */}
      <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-border md:block" />

      <div className="space-y-12">
        <AnimatePresence mode="wait">
          {isMounted && timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative grid gap-4 md:grid-cols-2"
            >
              {/* Year - Left Side */}
              <div className={`md:text-right ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="mb-2 text-2xl font-bold text-primary">{event.year}</div>
                <div className="font-heading text-xl font-semibold">{event.title}</div>
              </div>

              {/* Content - Right Side */}
              <div className={`relative ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                {/* Circle on the line */}
                <div className="absolute left-1/2 top-3 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:block" />
                
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
} 