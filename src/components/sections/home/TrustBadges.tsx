'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Icons } from '@/components/common/Icons'

interface TrustBadge {
  id: string
  name: string
  image: string
  category: 'certification' | 'media'
  description: string
  link?: string
}

const trustBadges: TrustBadge[] = [
  {
    id: 'iso-27001',
    name: 'ISO 27001',
    image: '/images/badges/iso-27001.svg',
    category: 'certification',
    description: 'Certified for information security management',
    link: 'https://www.iso.org/isoiec-27001-information-security.html'
  },
  {
    id: 'financial-times',
    name: 'Financial Times',
    image: '/images/badges/ft-logo.svg',
    category: 'media',
    description: 'Leading innovator in cross-border investments',
    link: 'https://www.ft.com'
  },
  {
    id: 'bloomberg',
    name: 'Bloomberg',
    image: '/images/badges/bloomberg-logo.svg',
    category: 'media',
    description: 'Top 10 emerging investment firms to watch',
    link: 'https://www.bloomberg.com'
  },
  {
    id: 'forbes',
    name: 'Forbes',
    image: '/images/badges/forbes-logo.svg',
    category: 'media',
    description: 'Pioneering global investment partnerships',
    link: 'https://www.forbes.com'
  }
]

export function TrustBadges() {
  const [isMounted, setIsMounted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'certification' | 'media'>('all')

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const filteredBadges = selectedCategory === 'all' 
    ? trustBadges 
    : trustBadges.filter(badge => badge.category === selectedCategory)

  return (
    <section className="border-t bg-muted py-16 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted By Industry Leaders
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our commitment to excellence is recognized by leading institutions and media outlets
          </p>
        </div>

        {/* Category Filter */}
        <div className="mt-8 flex justify-center gap-4">
          {(['all', 'certification', 'media'] as const).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-muted hover:bg-primary/10'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="wait">
            {isMounted && filteredBadges.map((badge, index) => (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative aspect-[3/2] mb-4">
                  <Image
                    src={badge.image}
                    alt={badge.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="space-y-2 text-center">
                  <h3 className="font-heading text-lg font-semibold">
                    {badge.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {badge.description}
                  </p>
                  {badge.link && (
                    <a
                      href={badge.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Learn More
                      <Icons.arrowRight className="ml-1 h-4 w-4" />
                    </a>
                  )}
                </div>

                <div className="absolute right-4 top-4">
                  <div className={`rounded-full px-2 py-1 text-xs font-medium ${
                    badge.category === 'certification'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {badge.category === 'certification' ? 'Certified' : 'Featured In'}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
} 