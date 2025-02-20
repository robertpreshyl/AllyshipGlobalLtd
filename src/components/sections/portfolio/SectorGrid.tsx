'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icons } from '@/components/common/Icons'

interface Project {
  id: string
  title: string
  description: string
  sector: 'real-estate' | 'energy' | 'technology' | 'trade'
  location: string
  value: string
  image: string
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Luxury Residential Complex',
    description: 'Premium residential development in London\'s prime location.',
    sector: 'real-estate',
    location: 'London, UK',
    value: '$150M',
    image: '/images/portfolio/real-estate-1.jpg',
  },
  {
    id: '2',
    title: 'Solar Farm Initiative',
    description: 'Large-scale solar energy project powering 50,000 homes.',
    sector: 'energy',
    location: 'Dubai, UAE',
    value: '$200M',
    image: '/images/portfolio/energy-1.jpg',
  },
  {
    id: '3',
    title: 'Blockchain Platform',
    description: 'Innovative blockchain solution for cross-border transactions.',
    sector: 'technology',
    location: 'Singapore',
    value: '$75M',
    image: '/images/portfolio/tech-1.jpg',
  },
  {
    id: '4',
    title: 'Global Trade Hub',
    description: 'Strategic import/export facility connecting Asia and Europe.',
    sector: 'trade',
    location: 'Rotterdam, Netherlands',
    value: '$300M',
    image: '/images/portfolio/trade-1.jpg',
  },
  {
    id: '5',
    title: 'Smart Office Complex',
    description: 'Next-generation commercial space with IoT integration.',
    sector: 'real-estate',
    location: 'New York, USA',
    value: '$250M',
    image: '/images/portfolio/real-estate-2.jpg',
  },
  {
    id: '6',
    title: 'Wind Farm Network',
    description: 'Offshore wind energy project in the North Sea.',
    sector: 'energy',
    location: 'Copenhagen, Denmark',
    value: '$400M',
    image: '/images/portfolio/energy-2.jpg',
  },
]

const sectors = [
  { id: 'all', label: 'All Sectors' },
  { id: 'real-estate', label: 'Real Estate', icon: 'building' },
  { id: 'energy', label: 'Energy', icon: 'zap' },
  { id: 'technology', label: 'Technology', icon: 'cpu' },
  { id: 'trade', label: 'Import/Export', icon: 'ship' },
] as const

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
          {isMounted && sectors.map((sector) => {
            const Icon = sector.icon ? Icons[sector.icon as keyof typeof Icons] : null
            return (
              <motion.button
                key={sector.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedSector(sector.id)}
                className={`flex items-center space-x-2 rounded-full px-6 py-2 text-sm font-medium transition-colors
                  ${
                    selectedSector === sector.id
                      ? 'bg-primary text-white'
                      : 'bg-muted hover:bg-primary/10'
                  }`}
              >
                {Icon && <Icon className="h-4 w-4" />}
                <span>{sector.label}</span>
              </motion.button>
            )
          })}
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
                <div className="relative h-full w-full bg-muted">
                  {/* Placeholder gradient while image loads */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                  <div className="flex h-full items-center justify-center">
                    <Icons.image className="h-12 w-12 text-muted-foreground/20" />
                  </div>
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