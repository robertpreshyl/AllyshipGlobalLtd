'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useTranslation } from '@/lib/i18n/useTranslation'
import { Icons } from '@/components/common/Icons'

interface Stat {
  value: number
  prefix?: string
  suffix?: string
  label: ['home', 'stats', 'countries' | 'partners' | 'investments']
  icon: keyof typeof Icons
  bgColor: string
  textColor: string
  borderColor: string
  accentColor: string
}

// Animated counter component
function Counter({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const count = useMotionValue(0)
  const rounded = useSpring(count, { stiffness: 50, damping: 15 })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      count.set(value)
    }
  }, [isInView, value, count])

  useEffect(() => {
    const unsubscribe = rounded.onChange(v => {
      setDisplayValue(Math.round(v))
    })
    return () => unsubscribe()
  }, [rounded])

  return <span ref={ref}>{prefix}{displayValue}{suffix}</span>
}

export function StatsSection() {
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const stats: Stat[] = [
    { 
      value: 35, 
      suffix: '+', 
      label: ['home', 'stats', 'countries'], 
      icon: 'globe',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-200',
      accentColor: 'bg-blue-500/30'
    },
    { 
      value: 120, 
      suffix: '+', 
      label: ['home', 'stats', 'partners'], 
      icon: 'users',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600',
      borderColor: 'border-purple-200',
      accentColor: 'bg-purple-500/30'
    },
    { 
      value: 2.5, 
      prefix: '$', 
      suffix: 'B+', 
      label: ['home', 'stats', 'investments'], 
      icon: 'dollarSign',
      bgColor: 'bg-green-100',
      textColor: 'text-green-600',
      borderColor: 'border-green-200',
      accentColor: 'bg-green-500/30'
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 md:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <svg className="absolute left-0 top-0 h-full w-full" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1440 560" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M-20 50C20 20 50 0 100 0C200 0 300 100 400 100C500 100 600 50 700 50C800 50 900 100 1000 100C1100 100 1200 20 1300 20C1400 20 1420 50 1440 80" 
            stroke="rgba(59, 130, 246, 0.1)" 
            strokeWidth="2"
            fill="none"
          />
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            d="M-20 150C20 120 50 100 100 100C200 100 300 200 400 200C500 200 600 150 700 150C800 150 900 200 1000 200C1100 200 1200 120 1300 120C1400 120 1420 150 1440 180" 
            stroke="rgba(139, 92, 246, 0.1)" 
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            {t(['home', 'hero', 'trusted'])}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {t(['home', 'stats', 'countries'])}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            {t(['home', 'hero', 'subtitle'])}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Decorative gradient background */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-50 to-gray-100/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Animated icon */}
              <div className="mb-6 flex items-center justify-between">
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${stat.bgColor} ${stat.textColor}`}>
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {React.createElement(Icons[stat.icon], { className: 'h-8 w-8' })}
                  </motion.div>
                </div>
                
                {/* Decorative element */}
                <div className={`h-8 w-8 rounded-full border-2 ${stat.borderColor} opacity-30`} />
              </div>
              
              {/* Counter */}
              <h3 className="font-display text-5xl font-bold text-gray-900">
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </h3>
              
              <p className="mt-3 text-lg font-medium text-gray-600">{t(stat.label)}</p>
              
              {/* Animated line */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '40%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                className={`mt-6 h-1 rounded-full ${stat.accentColor}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 