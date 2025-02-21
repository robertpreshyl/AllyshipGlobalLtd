'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icons } from '@/components/common/Icons'

interface SuccessStory {
  id: string
  title: string
  description: string
  partner: string
  achievement: string
  metrics: {
    label: string
    value: string
    icon: keyof typeof Icons
  }[]
  image: string
}

const successStories: SuccessStory[] = [
  {
    id: '1',
    title: 'Cross-Border Real Estate Innovation',
    description: 'Partnering with Global Ventures Ltd to revolutionize international property investment.',
    partner: 'Global Ventures Ltd',
    achievement: 'Created a seamless platform for cross-border real estate investments, reducing transaction time by 60%.',
    metrics: [
      { label: 'Transactions', value: '$1B+', icon: 'building' },
      { label: 'Countries', value: '15+', icon: 'mapPin' },
      { label: 'Time Saved', value: '60%', icon: 'chartBar' },
    ],
    image: '/images/success/real-estate-success.svg',
  },
  {
    id: '2',
    title: 'Sustainable Energy Partnership',
    description: 'Collaboration with MENA Investments on renewable energy infrastructure.',
    partner: 'MENA Investments',
    achievement: 'Developed and implemented sustainable energy solutions across multiple Middle Eastern markets.',
    metrics: [
      { label: 'Investment', value: '$2.5B', icon: 'building' },
      { label: 'CO2 Reduction', value: '500K tons', icon: 'zap' },
      { label: 'Jobs Created', value: '1000+', icon: 'chartBar' },
    ],
    image: '/images/success/energy-success.svg',
  },
  {
    id: '3',
    title: 'Tech Innovation Fund',
    description: 'Strategic partnership with Tech Ventures Group for emerging technology investments.',
    partner: 'Tech Ventures Group',
    achievement: 'Launched a dedicated fund for AI and blockchain startups, achieving 300% ROI in 18 months.',
    metrics: [
      { label: 'Fund Size', value: '$500M', icon: 'building' },
      { label: 'Portfolio', value: '25+', icon: 'cpu' },
      { label: 'ROI', value: '300%', icon: 'chartBar' },
    ],
    image: '/images/success/tech-success.svg',
  },
]

export function SuccessStories() {
  const [isMounted, setIsMounted] = useState(false)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="grid gap-8">
      <AnimatePresence mode="wait">
        {isMounted && successStories.map((story) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="overflow-hidden rounded-lg border bg-background"
          >
            <div className="p-6">
              <div className="mb-4">
                <h3 className="mb-2 font-heading text-2xl font-semibold">{story.title}</h3>
                <p className="text-muted-foreground">{story.description}</p>
              </div>

              {/* Expandable Content */}
              <div
                className={`grid transition-all duration-300 ease-in-out
                  ${expandedId === story.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-6 pt-4">
                    {/* Partner & Achievement */}
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="mb-2 font-heading text-lg font-semibold">Partner</h4>
                        <p className="text-sm text-muted-foreground">{story.partner}</p>
                      </div>
                      <div>
                        <h4 className="mb-2 font-heading text-lg font-semibold">Achievement</h4>
                        <p className="text-sm text-muted-foreground">{story.achievement}</p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div>
                      <h4 className="mb-4 font-heading text-lg font-semibold">Key Metrics</h4>
                      <div className="grid gap-4 md:grid-cols-3">
                        {story.metrics.map((metric) => {
                          const Icon = Icons[metric.icon]
                          return (
                            <div key={metric.label} className="text-center">
                              <div className="mb-2 flex justify-center">
                                <Icon className="h-6 w-6 text-primary" />
                              </div>
                              <div className="text-2xl font-bold text-primary">{metric.value}</div>
                              <div className="text-sm text-muted-foreground">{metric.label}</div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Toggle Button */}
              <button
                onClick={() => setExpandedId(expandedId === story.id ? null : story.id)}
                className="mt-4 flex items-center text-sm font-medium text-primary hover:text-primary/80"
              >
                <span>{expandedId === story.id ? 'Show Less' : 'Learn More'}</span>
                <Icons.chevronDown
                  className={`ml-1 h-4 w-4 transition-transform
                    ${expandedId === story.id ? 'rotate-180' : ''}`}
                />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
} 