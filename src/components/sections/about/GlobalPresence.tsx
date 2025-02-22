'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icons } from '@/components/common/Icons'

interface Office {
  city: string
  country: string
  region: string
  coordinates: {
    lat: number
    lng: number
  }
}

const offices: Office[] = [
  {
    city: 'London',
    country: 'United Kingdom',
    region: 'Europe',
    coordinates: { lat: 51.5074, lng: -0.1278 },
  },
  {
    city: 'Dubai',
    country: 'UAE',
    region: 'Middle East',
    coordinates: { lat: 25.2048, lng: 55.2708 },
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    region: 'Asia',
    coordinates: { lat: 1.3521, lng: 103.8198 },
  },
  {
    city: 'New York',
    country: 'USA',
    region: 'North America',
    coordinates: { lat: 40.7128, lng: -74.0060 },
  },
]

export function GlobalPresence() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="rounded-lg border bg-muted/50 p-6">
      <div className="mb-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <AnimatePresence mode="wait">
          {isMounted && offices.map((office, index) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4">
                <Icons.mapPin className="mx-auto h-8 w-8 text-primary" />
              </div>
              <div className="mb-2 text-xl font-bold text-primary">{office.city}</div>
              <div className="text-sm text-muted-foreground">{office.country}</div>
              <div className="text-xs text-muted-foreground">{office.region}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Map Placeholder - To be replaced with an actual map integration */}
      <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-muted">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-muted-foreground">Interactive Map Coming Soon</p>
        </div>
      </div>
    </div>
  )
} 