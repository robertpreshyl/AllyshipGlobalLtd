'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icons } from '@/components/common/Icons'

interface Value {
  title: string
  description: string
  icon: keyof typeof Icons
}

const values: Value[] = [
  {
    title: 'Trust',
    description: 'Building lasting relationships through transparency and integrity in all our dealings.',
    icon: 'handshake',
  },
  {
    title: 'Innovation',
    description: 'Embracing new technologies and approaches to create cutting-edge investment solutions.',
    icon: 'cpu',
  },
  {
    title: 'Sustainability',
    description: 'Committing to responsible investments that create long-term value for all stakeholders.',
    icon: 'zap',
  },
]

export function Values() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="grid gap-8 md:grid-cols-3">
      <AnimatePresence mode="wait">
        {isMounted && values.map((value, index) => {
          const Icon = Icons[value.icon]
          return (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 rounded-full bg-primary/10 p-6">
                <Icon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="mb-3 font-heading text-2xl font-semibold">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
} 