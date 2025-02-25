'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslation } from '@/lib/i18n/useTranslation'

interface TrustBadge {
  name: string
  logo: string
}

export function TrustBadgesSection() {
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const trustBadges: TrustBadge[] = [
    { name: 'Financial Times', logo: '/images/logos/ft-logo.svg' },
    { name: 'Bloomberg', logo: '/images/logos/bloomberg-logo.svg' },
    { name: 'Wall Street Journal', logo: '/images/logos/wsj-logo.svg' },
    { name: 'Forbes', logo: '/images/logos/forbes-logo.svg' },
    { name: 'Reuters', logo: '/images/logos/reuters-logo.svg' },
    { name: 'CNBC', logo: '/images/logos/cnbc-logo.svg' },
    { name: 'The Economist', logo: '/images/logos/economist-logo.svg' },
  ]

  // Duplicate badges for infinite marquee effect
  const allBadges = [...trustBadges, ...trustBadges]

  return (
    <section className="relative overflow-hidden border-t border-gray-200 bg-white py-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-10 right-10 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-medium text-primary">
            {t(['home', 'hero', 'trusted'])}
          </span>
          <h2 className="mt-3 text-2xl font-bold text-gray-900">
            {t(['home', 'trustBadges', 'title'])}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            {t(['home', 'hero', 'subtitle'])}
          </p>
        </motion.div>
      </div>

      {/* Marquee effect */}
      <div className="relative mt-12 overflow-hidden py-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white" />
        
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop" 
          }}
          className="flex w-fit items-center gap-16"
        >
          {allBadges.map((badge, index) => (
            <div
              key={index}
              className="group flex h-16 w-40 items-center justify-center rounded-lg border border-gray-200 bg-white px-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md"
            >
              <div className="relative flex h-full w-full items-center justify-center">
                {/* Display logo image */}
                <div className="relative h-10 w-full">
                  <Image
                    src={badge.logo}
                    alt={badge.name}
                    fill
                    sizes="160px"
                    className="object-contain transition-all duration-300"
                  />
                </div>
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 -z-10 overflow-hidden rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -inset-x-full top-0 h-full w-[200%] animate-[shine_1.5s_ease-in-out] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Testimonial or additional trust element */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="container mx-auto mt-16 max-w-4xl px-4 text-center sm:px-6 lg:px-8"
      >
        <blockquote className="text-lg font-medium italic text-gray-600">
          "{t(['about', 'values', 'trust'])}"
        </blockquote>
        <div className="mt-4 text-sm font-medium text-gray-900">
          — {t(['about', 'values', 'innovation'])}
        </div>
      </motion.div>
    </section>
  )
} 