'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icons } from '@/components/common/Icons'

interface FeaturedProject {
  id: string
  title: string
  description: string
  sector: string
  stats: {
    label: string
    value: string
    icon: keyof typeof Icons
  }[]
  image: string
}

const featuredProjects: FeaturedProject[] = [
  {
    id: 'dubai-mega-development',
    title: 'Dubai Mega Development',
    description: 'A landmark mixed-use development project featuring luxury residential towers, premium office spaces, and a world-class retail complex.',
    sector: 'Real Estate & Infrastructure',
    stats: [
      {
        label: 'Total Investment',
        value: '$2.5B',
        icon: 'building'
      },
      {
        label: 'Project Area',
        value: '1.2M sqm',
        icon: 'layout'
      },
      {
        label: 'Completion',
        value: '2026',
        icon: 'target'
      }
    ],
    image: '/images/portfolio/featured/dubai-mega.svg'
  },
  {
    id: 'green-energy-initiative',
    title: 'MENA Green Energy Initiative',
    description: 'Comprehensive renewable energy infrastructure project combining solar, wind, and smart grid technologies across the MENA region.',
    sector: 'Energy & Sustainability',
    stats: [
      {
        label: 'Investment Size',
        value: '$3.8B',
        icon: 'building'
      },
      {
        label: 'Power Output',
        value: '5 GW',
        icon: 'zap'
      },
      {
        label: 'Carbon Reduction',
        value: '4.2M tons',
        icon: 'shield'
      }
    ],
    image: '/images/portfolio/featured/green-energy.svg'
  }
]

export function ProjectShowcase() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <AnimatePresence mode="wait">
        {isMounted && featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group overflow-hidden rounded-lg border bg-background shadow-sm transition-shadow hover:shadow-md"
          >
            {/* Project Image */}
            <div className="aspect-[16/9] overflow-hidden">
              <div className="relative h-full w-full bg-muted">
                {/* Placeholder gradient while image loads */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                <div className="flex h-full items-center justify-center">
                  <Icons.image className="h-16 w-16 text-muted-foreground/20" />
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <div className="mb-4">
                <h3 className="mb-2 font-heading text-2xl font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-3 gap-4">
                {project.stats.map((stat) => {
                  const Icon = Icons[stat.icon]
                  return (
                    <div key={stat.label} className="text-center">
                      <div className="mb-2 flex justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-lg font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
} 