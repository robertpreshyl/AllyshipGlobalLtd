'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTranslation } from '@/lib/i18n/useTranslation'
import { Icons } from '@/components/common/Icons'

interface Sector {
  title: ['portfolio', 'sectors', 'realEstate' | 'energy' | 'technology' | 'trade']
  icon: keyof typeof Icons
  href: string
  color: string
  bgGradient: string
  description: string
}

export function SectorsSection() {
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const sectors: Sector[] = [
    { 
      title: ['portfolio', 'sectors', 'realEstate'], 
      icon: 'building', 
      href: '/portfolio/real-estate',
      color: 'text-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      description: 'Premium real estate investments across global markets'
    },
    { 
      title: ['portfolio', 'sectors', 'energy'], 
      icon: 'zap', 
      href: '/portfolio/energy',
      color: 'text-yellow-600',
      bgGradient: 'from-yellow-50 to-yellow-100',
      description: 'Sustainable energy solutions for a greener future'
    },
    { 
      title: ['portfolio', 'sectors', 'technology'], 
      icon: 'cpu', 
      href: '/portfolio/technology',
      color: 'text-purple-600',
      bgGradient: 'from-purple-50 to-purple-100',
      description: 'Cutting-edge technology investments in emerging markets'
    },
    { 
      title: ['portfolio', 'sectors', 'trade'], 
      icon: 'globe', 
      href: '/portfolio/trade',
      color: 'text-green-600',
      bgGradient: 'from-green-50 to-green-100',
      description: 'Global trade opportunities with strategic partnerships'
    },
  ]

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-100 blur-3xl" />
        <div className="absolute -bottom-32 right-20 h-80 w-80 rounded-full bg-green-100 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary"
          >
            {t(['common', 'explore'])}
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
          >
            {t(['home', 'sectors', 'title'])}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-600"
          >
            {t(['home', 'sectors', 'subtitle'])}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link 
                href={sector.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${sector.bgGradient} opacity-50`} />
                
                {/* Animated dots */}
                {hoveredIndex === index && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute h-1.5 w-1.5 rounded-full ${sector.color.replace('text', 'bg')}`}
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: [0, 1, 0],
                          y: [0, -20],
                          x: Math.random() * 10 - 5
                        }}
                        transition={{ 
                          duration: 1 + Math.random(),
                          delay: i * 0.1,
                          repeat: Infinity,
                          repeatDelay: Math.random()
                        }}
                        style={{ 
                          bottom: '10%',
                          left: `${20 + i * 15}%`
                        }}
                      />
                    ))}
                  </>
                )}
                
                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 rounded-full ${sector.color.replace('text', 'bg')}/10 blur-xl transition-all duration-300 group-hover:scale-150`} />
                  <div className={`relative flex h-16 w-16 items-center justify-center rounded-full ${sector.color.replace('text', 'bg')}/20`}>
                    {React.createElement(Icons[sector.icon], { className: `h-8 w-8 ${sector.color}` })}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-gray-900">{t(sector.title)}</h3>
                <p className="mb-6 text-sm text-gray-600">{sector.description}</p>
                
                <div className="mt-auto flex items-center text-primary">
                  <span className="text-sm font-medium">{t(['common', 'learnMore'])}</span>
                  <motion.div
                    animate={hoveredIndex === index ? { x: 5 } : { x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icons.arrowRight className="ml-2 h-4 w-4" />
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 