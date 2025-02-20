'use client'

import { motion } from 'framer-motion'
import { Icons } from '@/components/common/Icons'

const quickStats = [
  {
    label: 'Countries Served',
    value: '25+',
    icon: Icons.mapPin,
  },
  {
    label: 'Assets Under Management',
    value: '$2.5B+',
    icon: Icons.building,
  },
  {
    label: 'Global Partners',
    value: '100+',
    icon: Icons.handshake,
  },
  {
    label: 'Successful Investments',
    value: '150+',
    icon: Icons.chartBar,
  },
] as const

export function QuickStats() {
  return (
    <section className="bg-muted py-16">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-3xl font-bold text-primary">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 