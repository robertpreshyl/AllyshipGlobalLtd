'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icons } from '@/components/common/Icons'

interface CaseStudy {
  id: string
  title: string
  description: string
  challenge: string
  solution: string
  results: {
    label: string
    value: string
  }[]
  image: string
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Revolutionizing Urban Living',
    description: 'How we transformed a brownfield site into a sustainable smart city district.',
    challenge: 'Converting an abandoned industrial area into a modern, sustainable residential district while maintaining the area\'s historical significance.',
    solution: 'Implemented cutting-edge smart city technologies while preserving historical facades, creating a unique blend of old and new.',
    results: [
      { label: 'Property Value Increase', value: '150%' },
      { label: 'Energy Efficiency', value: '60%' },
      { label: 'New Residences', value: '2,500+' },
    ],
    image: '/images/portfolio/case-1.jpg',
  },
  {
    id: '2',
    title: 'Green Energy Revolution',
    description: 'Pioneering renewable energy solutions across multiple markets.',
    challenge: 'Developing a scalable renewable energy infrastructure across diverse geographical locations with varying regulatory frameworks.',
    solution: 'Created a modular approach to renewable energy implementation, adaptable to different market conditions and requirements.',
    results: [
      { label: 'CO2 Reduction', value: '500K tons' },
      { label: 'Energy Output', value: '1.2 GW' },
      { label: 'Jobs Created', value: '1,000+' },
    ],
    image: '/images/portfolio/case-2.jpg',
  },
  {
    id: '3',
    title: 'Digital Trade Innovation',
    description: 'Streamlining global trade through blockchain technology.',
    challenge: 'Reducing friction in international trade processes while ensuring security and compliance.',
    solution: 'Developed a blockchain-based platform that automates documentation and verification processes.',
    results: [
      { label: 'Processing Time', value: '-70%' },
      { label: 'Cost Savings', value: '45%' },
      { label: 'Transactions', value: '100K+' },
    ],
    image: '/images/portfolio/case-3.jpg',
  },
]

export function CaseStudies() {
  const [isMounted, setIsMounted] = useState(false)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="grid gap-8">
      <AnimatePresence mode="wait">
        {isMounted && caseStudies.map((study) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="overflow-hidden rounded-lg border bg-background"
          >
            <div className="p-6">
              <div className="mb-4">
                <h3 className="mb-2 font-heading text-2xl font-semibold">{study.title}</h3>
                <p className="text-muted-foreground">{study.description}</p>
              </div>

              {/* Expandable Content */}
              <div
                className={`grid transition-all duration-300 ease-in-out
                  ${expandedId === study.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-4 pt-4">
                    {/* Challenge & Solution */}
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="mb-2 font-heading text-lg font-semibold">The Challenge</h4>
                        <p className="text-sm text-muted-foreground">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="mb-2 font-heading text-lg font-semibold">Our Solution</h4>
                        <p className="text-sm text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="mb-4 font-heading text-lg font-semibold">Key Results</h4>
                      <div className="grid gap-4 md:grid-cols-3">
                        {study.results.map((result) => (
                          <div key={result.label} className="text-center">
                            <div className="text-2xl font-bold text-primary">{result.value}</div>
                            <div className="text-sm text-muted-foreground">{result.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Toggle Button */}
              <button
                onClick={() => setExpandedId(expandedId === study.id ? null : study.id)}
                className="mt-4 flex items-center text-sm font-medium text-primary hover:text-primary/80"
              >
                <span>{expandedId === study.id ? 'Show Less' : 'Learn More'}</span>
                <Icons.chevronDown
                  className={`ml-1 h-4 w-4 transition-transform
                    ${expandedId === study.id ? 'rotate-180' : ''}`}
                />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
} 