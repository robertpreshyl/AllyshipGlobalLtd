'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const trustBadges = [
  {
    name: 'Financial Times',
    image: '/images/badges/ft-logo.svg',
    quote: 'Leading innovator in cross-border investments',
  },
  {
    name: 'Bloomberg',
    image: '/images/badges/bloomberg-logo.svg',
    quote: 'Top 10 emerging investment firms to watch',
  },
  {
    name: 'ISO 27001',
    image: '/images/badges/iso-logo.svg',
    quote: 'Certified for information security management',
  },
  {
    name: 'Forbes',
    image: '/images/badges/forbes-logo.svg',
    quote: 'Pioneering global investment partnerships',
  },
] as const

export function TrustBadges() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section className="border-t bg-muted py-16">
      <div className="container">
        <h2 className="mb-12 text-center font-heading text-3xl font-bold">Trusted By Industry Leaders</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="wait">
            {isMounted && trustBadges.map((badge, index) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 h-16 w-32">
                  <Image
                    src={badge.image}
                    alt={badge.name}
                    width={200}
                    height={100}
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="text-sm text-muted-foreground">&quot;{badge.quote}&quot;</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
} 