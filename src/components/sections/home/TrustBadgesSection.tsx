'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslation } from '@/lib/i18n/useTranslation'

interface TrustBadge {
  name: string
  logo: string
  sector: 'real-estate' | 'energy' | 'technology' | 'trade'
}

export function TrustBadgesSection() {
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false)
  const [activeSector, setActiveSector] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const trustBadges: TrustBadge[] = [
    // Real Estate Sector
    { name: 'Blackstone Group', logo: '/images/logos/industry/blackstone-logo.svg', sector: 'real-estate' },
    { name: 'Brookfield Asset Management', logo: '/images/logos/industry/brookfield-logo.svg', sector: 'real-estate' },
    { name: 'CBRE Group', logo: '/images/logos/industry/cbre-logo.svg', sector: 'real-estate' },
    { name: 'Prologis', logo: '/images/logos/industry/prologis-logo.svg', sector: 'real-estate' },
    { name: 'Simon Property Group', logo: '/images/logos/industry/simon-logo.svg', sector: 'real-estate' },
    
    // Energy Sector
    { name: 'NextEra Energy', logo: '/images/logos/industry/nextera-logo.svg', sector: 'energy' },
    { name: 'Tesla Energy', logo: '/images/logos/industry/tesla-logo.svg', sector: 'energy' },
    { name: 'ExxonMobil', logo: '/images/logos/industry/exxon-logo.svg', sector: 'energy' },
    { name: 'Orsted', logo: '/images/logos/industry/orsted-logo.svg', sector: 'energy' },
    { name: 'Brookfield Renewable Partners', logo: '/images/logos/industry/brookfield-renewable-logo.svg', sector: 'energy' },
    
    // Technology Sector
    { name: 'SoftBank Vision Fund', logo: '/images/logos/industry/softbank-logo.svg', sector: 'technology' },
    { name: 'Sequoia Capital', logo: '/images/logos/industry/sequoia-logo.svg', sector: 'technology' },
    { name: 'Google Ventures', logo: '/images/logos/industry/google-ventures-logo.svg', sector: 'technology' },
    { name: 'Microsoft M12 Ventures', logo: '/images/logos/industry/microsoft-m12-logo.svg', sector: 'technology' },
    { name: 'Intel Capital', logo: '/images/logos/industry/intel-capital-logo.svg', sector: 'technology' },
    
    // Import/Export Sector
    { name: 'Maersk Group', logo: '/images/logos/industry/maersk-logo.svg', sector: 'trade' },
    { name: 'Alibaba Group', logo: '/images/logos/industry/alibaba-logo.svg', sector: 'trade' },
    { name: 'Amazon Global Logistics', logo: '/images/logos/industry/amazon-logistics-logo.svg', sector: 'trade' },
    { name: 'DP World', logo: '/images/logos/industry/dp-world-logo.svg', sector: 'trade' },
    { name: 'Cargill', logo: '/images/logos/industry/cargill-logo.svg', sector: 'trade' },
  ]

  // Filter badges by sector if a sector is selected
  const filteredBadges = activeSector 
    ? trustBadges.filter(badge => badge.sector === activeSector)
    : trustBadges

  // Duplicate badges for infinite marquee effect
  const allBadges = [...filteredBadges, ...filteredBadges]

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
        
        {/* Sector filter buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <button 
            onClick={() => setActiveSector(null)}
            className={`rounded-full px-4 py-1 text-sm font-medium transition-colors ${
              activeSector === null ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All Sectors
          </button>
          <button 
            onClick={() => setActiveSector('real-estate')}
            className={`rounded-full px-4 py-1 text-sm font-medium transition-colors ${
              activeSector === 'real-estate' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Real Estate
          </button>
          <button 
            onClick={() => setActiveSector('energy')}
            className={`rounded-full px-4 py-1 text-sm font-medium transition-colors ${
              activeSector === 'energy' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Energy
          </button>
          <button 
            onClick={() => setActiveSector('technology')}
            className={`rounded-full px-4 py-1 text-sm font-medium transition-colors ${
              activeSector === 'technology' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Technology
          </button>
          <button 
            onClick={() => setActiveSector('trade')}
            className={`rounded-full px-4 py-1 text-sm font-medium transition-colors ${
              activeSector === 'trade' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Import/Export
          </button>
        </div>
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
              className="group flex h-16 w-48 items-center justify-center rounded-lg border border-gray-200 bg-white px-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md"
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