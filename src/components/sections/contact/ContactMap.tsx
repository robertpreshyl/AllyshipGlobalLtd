'use client'

import { motion } from 'framer-motion'
import { Icons } from '@/components/common/Icons'

const locations = [
  {
    id: 'london',
    city: 'London',
    country: 'United Kingdom',
    coordinates: '51.5074° N, 0.1278° W',
  },
  {
    id: 'dubai',
    city: 'Dubai',
    country: 'United Arab Emirates',
    coordinates: '25.2048° N, 55.2708° E',
  },
  {
    id: 'singapore',
    city: 'Singapore',
    country: 'Singapore',
    coordinates: '1.3521° N, 103.8198° E',
  },
]

export function ContactMap() {
  return (
    <div className="space-y-8">
      {/* Location Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {locations.map((location, index) => (
          <motion.div
            key={location.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-lg border bg-background p-6 text-center"
          >
            <div className="mb-4 flex justify-center">
              <Icons.mapPin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 font-heading text-xl font-semibold">{location.city}</h3>
            <p className="mb-2 text-sm text-muted-foreground">{location.country}</p>
            <p className="text-xs text-muted-foreground">{location.coordinates}</p>
          </motion.div>
        ))}
      </div>

      {/* Map Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-lg border bg-muted/50"
      >
        <div className="flex aspect-[21/9] items-center justify-center">
          <div className="text-center">
            <Icons.map className="mx-auto mb-4 h-12 w-12 text-muted-foreground/50" />
            <p className="text-sm text-muted-foreground">
              Interactive map coming soon
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 