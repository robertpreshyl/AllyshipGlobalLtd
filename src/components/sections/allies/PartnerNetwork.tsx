'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icons } from '@/components/common/Icons'

interface Partner {
  id: string
  name: string
  type: 'investor' | 'strategic' | 'operational'
  region: string
  description: string
  logo: string
}

const partners: Partner[] = [
  {
    id: '1',
    name: 'Global Ventures Ltd',
    type: 'investor',
    region: 'Europe',
    description: 'Leading venture capital firm specializing in emerging markets.',
    logo: '/images/partners/global-ventures.svg',
  },
  {
    id: '2',
    name: 'Strategic Solutions Inc',
    type: 'strategic',
    region: 'North America',
    description: 'Technology-focused strategic consulting and investment firm.',
    logo: '/images/partners/strategic-solutions.svg',
  },
  {
    id: '3',
    name: 'MENA Investments',
    type: 'investor',
    region: 'Middle East',
    description: 'Regional investment powerhouse with focus on infrastructure.',
    logo: '/images/partners/mena-investments.svg',
  },
  {
    id: '4',
    name: 'Asia Pacific Holdings',
    type: 'operational',
    region: 'Asia',
    description: 'Operational excellence partner for Asian market expansion.',
    logo: '/images/partners/asia-pacific.svg',
  },
  {
    id: '5',
    name: 'Tech Ventures Group',
    type: 'strategic',
    region: 'Global',
    description: 'Global technology investment and development partner.',
    logo: '/images/partners/tech-ventures.svg',
  },
  {
    id: '6',
    name: 'Sustainable Future Corp',
    type: 'operational',
    region: 'Europe',
    description: 'Sustainable development and green energy operations specialist.',
    logo: '/images/partners/sustainable-future.svg',
  },
]

const partnerTypes = [
  { id: 'all', label: 'All Partners', icon: null },
  { id: 'investor', label: 'Investment Partners', icon: 'building' },
  { id: 'strategic', label: 'Strategic Partners', icon: 'handshake' },
  { id: 'operational', label: 'Operational Partners', icon: 'chartBar' },
] as const

export function PartnerNetwork() {
  const [selectedType, setSelectedType] = useState<string>('all')
  const [isMounted, setIsMounted] = useState(false)
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({})

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleImageLoad = (partnerId: string) => {
    setLoadedImages((prev) => ({ ...prev, [partnerId]: true }))
  }

  const handleImageError = (partnerId: string) => {
    setLoadedImages((prev) => ({ ...prev, [partnerId]: false }))
  }

  const getPartnerTypeIcon = (type: Partner['type']) => {
    switch (type) {
      case 'investor':
        return <Icons.building className="mr-1 h-4 w-4" />
      case 'strategic':
        return <Icons.handshake className="mr-1 h-4 w-4" />
      case 'operational':
        return <Icons.chartBar className="mr-1 h-4 w-4" />
    }
  }

  const filteredPartners = partners.filter(
    (partner) => selectedType === 'all' || partner.type === selectedType
  )

  return (
    <div>
      {/* Filter Buttons */}
      <div className="mb-12 flex flex-wrap justify-center gap-4">
        <AnimatePresence mode="wait">
          {isMounted && partnerTypes.map((type) => {
            const Icon = type.icon ? Icons[type.icon as keyof typeof Icons] : null
            return (
              <motion.button
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedType(type.id)}
                className={`flex items-center space-x-2 rounded-full px-6 py-2 text-sm font-medium transition-colors
                  ${
                    selectedType === type.id
                      ? 'bg-primary text-white'
                      : 'bg-muted hover:bg-primary/10'
                  }`}
              >
                {Icon && <Icon className="h-4 w-4" />}
                <span>{type.label}</span>
              </motion.button>
            )
          })}
        </AnimatePresence>
      </div>

      {/* Partners Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="wait">
          {isMounted && filteredPartners.map((partner) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="group overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Partner Logo */}
              <div className="mb-6 flex h-16 items-center justify-center">
                <div className="relative h-12 w-32">
                  {!loadedImages[partner.id] ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-8 w-8 animate-pulse rounded-full bg-muted" />
                    </div>
                  ) : null}
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className={`object-contain transition-opacity duration-300
                      ${loadedImages[partner.id] ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => handleImageLoad(partner.id)}
                    onError={() => handleImageError(partner.id)}
                  />
                </div>
              </div>

              {/* Partner Info */}
              <div className="text-center">
                <h3 className="mb-2 font-heading text-xl font-semibold">{partner.name}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{partner.description}</p>
                <div className="flex items-center justify-center space-x-4 text-sm text-primary">
                  <div className="flex items-center">
                    <Icons.mapPin className="mr-1 h-4 w-4" />
                    {partner.region}
                  </div>
                  <div className="flex items-center">
                    {getPartnerTypeIcon(partner.type)}
                    {partner.type.charAt(0).toUpperCase() + partner.type.slice(1)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
} 