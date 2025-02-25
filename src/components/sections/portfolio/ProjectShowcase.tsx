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
  },
  {
    id: 'tech-innovation-hub',
    title: 'Tech Innovation Hub',
    description: 'State-of-the-art research and development center focused on emerging technologies including AI, blockchain, and quantum computing.',
    sector: 'Technology & Innovation',
    stats: [
      {
        label: 'R&D Investment',
        value: '$1.2B',
        icon: 'building'
      },
      {
        label: 'Research Teams',
        value: '24',
        icon: 'users'
      },
      {
        label: 'Patents Filed',
        value: '175+',
        icon: 'fileText'
      }
    ],
    image: '/images/portfolio/featured/tech-innovation.svg'
  },
  {
    id: 'modern-silk-route',
    title: 'Modern Silk Route',
    description: 'Strategic logistics and trade infrastructure network connecting Europe, Middle East, and Asia with advanced transportation systems.',
    sector: 'Logistics & Trade',
    stats: [
      {
        label: 'Network Length',
        value: '8,500 km',
        icon: 'route'
      },
      {
        label: 'Trade Volume',
        value: '$42B/year',
        icon: 'barChart'
      },
      {
        label: 'Hub Cities',
        value: '12',
        icon: 'mapPin'
      }
    ],
    image: '/images/portfolio/featured/silk-route.svg'
  },
  {
    id: 'sustainable-agriculture',
    title: 'Sustainable Agriculture',
    description: 'Advanced agricultural project integrating renewable energy, smart irrigation systems, and sustainable farming practices.',
    sector: 'Agriculture & Sustainability',
    stats: [
      {
        label: 'Land Area',
        value: '15,000 ha',
        icon: 'layout'
      },
      {
        label: 'Water Savings',
        value: '65%',
        icon: 'droplet'
      },
      {
        label: 'Yield Increase',
        value: '40%',
        icon: 'trendingUp'
      }
    ],
    image: '/images/portfolio/featured/sustainable-agriculture.svg'
  },
  {
    id: 'singapore-smart-city',
    title: 'Singapore Smart City',
    description: 'Comprehensive urban development project implementing IoT, AI-driven infrastructure, and sustainable urban planning solutions.',
    sector: 'Smart Cities & Urban Tech',
    stats: [
      {
        label: 'Smart Systems',
        value: '250+',
        icon: 'cpu'
      },
      {
        label: 'Energy Efficiency',
        value: '35%',
        icon: 'zap'
      },
      {
        label: 'Data Points',
        value: '1.2M',
        icon: 'activity'
      }
    ],
    image: '/images/portfolio/featured/smart-city.svg'
  }
]

export function ProjectShowcase() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                {/* Image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLElement
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      const placeholder = document.createElement('div')
                      placeholder.className = 'absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center'
                      placeholder.innerHTML = '<svg class="h-16 w-16 text-muted-foreground/20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>'
                      parent.appendChild(placeholder)
                    }
                  }}
                />
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
                  const Icon = Icons[stat.icon] || Icons.star // Fallback to star icon if the specified icon doesn't exist
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