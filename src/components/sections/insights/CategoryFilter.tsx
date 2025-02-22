'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Icons } from '@/components/common/Icons'

const categories = [
  { id: 'all', label: 'All Posts', icon: 'layout' },
  { id: 'market-analysis', label: 'Market Analysis', icon: 'chartBar' },
  { id: 'investment-strategy', label: 'Investment Strategy', icon: 'target' },
  { id: 'company-news', label: 'Company News', icon: 'newspaper' },
  { id: 'industry-insights', label: 'Industry Insights', icon: 'lightbulb' },
  { id: 'educational', label: 'Educational', icon: 'graduationCap' },
]

export function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-heading text-2xl font-semibold">Latest Articles</h2>
        <div className="text-sm text-muted-foreground">
          Showing articles in{' '}
          <span className="font-medium text-primary">
            {categories.find(cat => cat.id === selectedCategory)?.label}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        {categories.map((category) => {
          const Icon = Icons[category.icon as keyof typeof Icons]
          return (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 rounded-full px-6 py-2 text-sm font-medium transition-colors
                ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-muted hover:bg-primary/10'
                }`}
            >
              <Icon className="h-4 w-4" />
              <span>{category.label}</span>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
} 