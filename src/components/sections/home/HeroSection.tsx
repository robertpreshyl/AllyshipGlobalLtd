'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslation } from '@/lib/i18n/useTranslation'
import { Icons } from '@/components/common/Icons'

export function HeroSection() {
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* SVG Background */}
        <div className="absolute inset-0">
          <Image 
            src="/images/hero-bg.svg" 
            alt="Background" 
            fill 
            priority
            className="object-cover"
          />
        </div>
        
        {/* Overlay with pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-15" />
        
        {/* Digital circuit lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 5 }).map((_, i) => {
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            return (
              <motion.div
                key={`circuit-${i}`}
                className="absolute h-px bg-white/30"
                style={{
                  top: `${startY}%`,
                  left: `${startX}%`,
                  width: '0%',
                  transformOrigin: 'left',
                }}
                animate={{
                  width: ['0%', '30%', '30%', '0%'],
                  opacity: [0, 0.8, 0.8, 0],
                }}
                transition={{
                  duration: 8,
                  times: [0, 0.4, 0.8, 1],
                  repeat: Infinity,
                  delay: i * 2,
                }}
              >
                <motion.div
                  className="absolute right-0 top-0 h-2 w-2 rounded-full bg-white/50"
                  animate={{
                    scale: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 8,
                    times: [0, 0.4, 0.8, 1],
                    repeat: Infinity,
                    delay: i * 2,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
        
        {/* Data visualization elements */}
        <div className="absolute inset-0">
          {/* Stock chart-like elements */}
          {Array.from({ length: 3 }).map((_, i) => {
            const top = 20 + i * 25;
            return (
              <motion.div
                key={`chart-${i}`}
                className="absolute left-0 h-px w-full"
                style={{ top: `${top}%` }}
              >
                <svg
                  width="100%"
                  height="50"
                  viewBox="0 0 1000 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-0 top-0"
                >
                  <motion.path
                    d={`M0,25 Q${50 + Math.random() * 50},${
                      Math.random() * 50
                    } ${100 + Math.random() * 50},${Math.random() * 50} T${
                      200 + Math.random() * 50
                    },${Math.random() * 50} T${300 + Math.random() * 50},${
                      Math.random() * 50
                    } T${400 + Math.random() * 50},${Math.random() * 50} T${
                      500 + Math.random() * 50
                    },${Math.random() * 50} T${600 + Math.random() * 50},${
                      Math.random() * 50
                    } T${700 + Math.random() * 50},${Math.random() * 50} T${
                      800 + Math.random() * 50
                    },${Math.random() * 50} T${900 + Math.random() * 50},${
                      Math.random() * 50
                    } T1000,${Math.random() * 50}`}
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: 1, 
                      opacity: 0.5,
                      d: [
                        `M0,25 Q${50 + Math.random() * 50},${
                          Math.random() * 50
                        } ${100 + Math.random() * 50},${Math.random() * 50} T${
                          200 + Math.random() * 50
                        },${Math.random() * 50} T${300 + Math.random() * 50},${
                          Math.random() * 50
                        } T${400 + Math.random() * 50},${Math.random() * 50} T${
                          500 + Math.random() * 50
                        },${Math.random() * 50} T${600 + Math.random() * 50},${
                          Math.random() * 50
                        } T${700 + Math.random() * 50},${Math.random() * 50} T${
                          800 + Math.random() * 50
                        },${Math.random() * 50} T${900 + Math.random() * 50},${
                          Math.random() * 50
                        } T1000,${Math.random() * 50}`,
                        `M0,25 Q${50 + Math.random() * 50},${
                          Math.random() * 50
                        } ${100 + Math.random() * 50},${Math.random() * 50} T${
                          200 + Math.random() * 50
                        },${Math.random() * 50} T${300 + Math.random() * 50},${
                          Math.random() * 50
                        } T${400 + Math.random() * 50},${Math.random() * 50} T${
                          500 + Math.random() * 50
                        },${Math.random() * 50} T${600 + Math.random() * 50},${
                          Math.random() * 50
                        } T${700 + Math.random() * 50},${Math.random() * 50} T${
                          800 + Math.random() * 50
                        },${Math.random() * 50} T${900 + Math.random() * 50},${
                          Math.random() * 50
                        } T1000,${Math.random() * 50}`
                      ]
                    }}
                    transition={{
                      pathLength: { duration: 2, delay: i * 0.5 },
                      opacity: { duration: 0.5, delay: i * 0.5 },
                      d: { duration: 20, repeat: Infinity, repeatType: "mirror" }
                    }}
                  />
                </svg>
              </motion.div>
            );
          })}
        </div>
        
        {/* Digital particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute h-1 w-1 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: `rgba(255, 255, 255, ${0.3 + Math.random() * 0.5})`,
                boxShadow: `0 0 ${2 + Math.random() * 4}px rgba(255, 255, 255, 0.8)`,
              }}
              animate={{
                y: [0, -(20 + Math.random() * 100)],
                x: [0, (Math.random() - 0.5) * 50],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 7,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        {/* Data nodes */}
        <div className="absolute inset-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={`node-${i}`}
              className="absolute h-3 w-3 rounded-full bg-white/20 backdrop-blur-sm"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                boxShadow: [
                  "0 0 0px rgba(255, 255, 255, 0.5)",
                  "0 0 20px rgba(255, 255, 255, 0.8)",
                  "0 0 0px rgba(255, 255, 255, 0.5)",
                ],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex h-full items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 backdrop-blur-sm"
          >
            <span className="text-sm font-medium text-white">
              {t(['home', 'hero', 'trusted'])}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="inline-block"
            >
              {t(['home', 'hero', 'title'])}
            </motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-xl text-white/90"
          >
            {t(['home', 'hero', 'subtitle'])}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/portfolio"
              className="group relative flex items-center gap-2 rounded-full bg-white px-8 py-3 text-base font-medium text-primary shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 3 }}
              />
              <span className="relative z-10">{t(['common', 'learnMore'])}</span>
              <Icons.arrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="group relative rounded-full border-2 border-white bg-transparent px-8 py-3 text-base font-medium text-white transition-all hover:bg-white/10 overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 4 }}
              />
              <span className="relative z-10">{t(['common', 'contactUs'])}</span>
            </Link>
          </motion.div>
          
          {/* Floating badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 flex flex-wrap gap-3"
          >
            {[
              { text: 'Innovative', icon: 'lightbulb' },
              { text: 'Trusted', icon: 'shield' },
              { text: 'Global', icon: 'globe' },
              { text: 'Expert', icon: 'star' }
            ].map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(255,255,255,0.15)" 
                }}
              >
                {badge.icon === 'lightbulb' && <Icons.lightbulb className="h-3 w-3" />}
                {badge.icon === 'shield' && <Icons.shield className="h-3 w-3" />}
                {badge.icon === 'globe' && <Icons.globe className="h-3 w-3" />}
                {badge.icon === 'star' && <Icons.star className="h-3 w-3" />}
                {badge.text}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="flex flex-col items-center">
          <span className="mb-2 text-xs font-medium text-white/70">Scroll</span>
          <Icons.chevronDown className="h-5 w-5 text-white/70" />
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent" />
    </section>
  )
} 