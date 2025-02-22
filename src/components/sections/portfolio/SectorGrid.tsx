'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icons } from '@/components/common/Icons'
import Image from 'next/image'

interface Project {
  id: string
  title: string
  description: string
  sector: 'real-estate' | 'energy' | 'technology' | 'trade'
  location: string
  value: string
  image: string
}

const sectorIconMap: Record<'real-estate' | 'energy' | 'technology' | 'trade', keyof typeof Icons> = {
  'real-estate': 'building',
  'energy': 'zap',
  'technology': 'cpu',
  'trade': 'ship',
}

const projects: Project[] = [
  {
    id: 'dubai-downtown',
    title: 'Dubai Downtown Development',
    description: 'Mixed-use development project in Dubai\'s prime business district.',
    sector: 'real-estate',
    location: 'Dubai, UAE',
    value: '$500M+',
    image: '/images/portfolio/projects/dubai-downtown.svg'
  },
  {
    id: 'solar-initiative',
    title: 'MENA Solar Initiative',
    description: 'Large-scale solar power infrastructure project across Middle East.',
    sector: 'energy',
    location: 'Multiple MENA Regions',
    value: '$750M+',
    image: '/images/portfolio/projects/solar-initiative.svg'
  },
  {
    id: 'smart-city',
    title: 'Singapore Smart City',
    description: 'Smart city technology integration and infrastructure development.',
    sector: 'technology',
    location: 'Singapore',
    value: '$300M+',
    image: '/images/portfolio/projects/smart-city.svg'
  },
  {
    id: 'silk-route',
    title: 'Modern Silk Route',
    description: 'Cross-border trade infrastructure and logistics network.',
    sector: 'trade',
    location: 'Asia-Europe Corridor',
    value: '$1B+',
    image: '/images/portfolio/projects/silk-route.svg'
  },
  {
    id: 'london-commercial',
    title: 'London Commercial Hub',
    description: 'Premium commercial real estate development in London\'s financial district.',
    sector: 'real-estate',
    location: 'London, UK',
    value: '$450M+',
    image: '/images/portfolio/projects/london-commercial.svg'
  },
  {
    id: 'renewable-grid',
    title: 'Asian Renewable Grid',
    description: 'Renewable energy infrastructure network across Asian markets.',
    sector: 'energy',
    location: 'Southeast Asia',
    value: '$600M+',
    image: '/images/portfolio/projects/renewable-grid.svg'
  }
]

const sectors = ['real-estate', 'energy', 'technology', 'trade'] as const

export function SectorGrid() {
  const [selectedSector, setSelectedSector] = useState<string>('all')
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const filteredProjects = projects.filter(
    (project) => selectedSector === 'all' || project.sector === selectedSector
  )

  return (
    <div>
      {/* Filter Buttons */}
      <div className="mb-8 flex flex-wrap justify-center gap-4">
        <AnimatePresence mode="wait">
          {isMounted && (
            <>
              <motion.button
                key="all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedSector('all')}
                className={`flex items-center space-x-2 rounded-full px-6 py-2 text-sm font-medium transition-colors
                  ${
                    selectedSector === 'all'
                      ? 'bg-primary text-white'
                      : 'bg-muted hover:bg-primary/10'
                  }`}
              >
                <Icons.briefcase className="h-4 w-4" />
                <span>All Sectors</span>
              </motion.button>
              {sectors.map((sector) => {
                const Icon = Icons[sectorIconMap[sector as keyof typeof sectorIconMap]]
                return (
                  <motion.button
                    key={sector}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedSector(sector)}
                    className={`flex items-center space-x-2 rounded-full px-6 py-2 text-sm font-medium transition-colors
                      ${
                        selectedSector === sector
                          ? 'bg-primary text-white'
                          : 'bg-muted hover:bg-primary/10'
                      }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{sector.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span>
                  </motion.button>
                )
              })}
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="wait">
          {isMounted && filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="group overflow-hidden rounded-lg border bg-background shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden">
                <div className="relative h-full w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="mb-2 font-heading text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center text-primary">
                    <Icons.mapPin className="mr-1 h-4 w-4" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-primary">
                    <Icons.building className="mr-1 h-4 w-4" />
                    {project.value}
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