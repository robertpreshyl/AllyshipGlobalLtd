'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { VideoBackground } from '@/components/common/VideoBackground'
import { Icons } from '@/components/common/Icons'
import Link from 'next/link'

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Background Video/Fallback */}
      {isMounted && !hasError && (
        <VideoBackground
          src="/videos/hero-background.mp4"
          fallbackImage="/images/hero-fallback.svg"
          onError={() => setHasError(true)}
        />
      )}
      {(hasError || !isMounted) && (
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/40" />
      )}

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-black/40" /> {/* Darker overlay for better contrast */}

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container px-4 text-center text-white sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {isMounted && (
              <div className="mx-auto max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    Uniting Global Allies for{' '}
                    <span className="text-secondary">Strategic Investments</span>
                  </h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mx-auto max-w-2xl text-lg text-gray-200 sm:text-xl"
                  >
                    Building cross-border partnerships and creating value through diverse investment opportunities worldwide.
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
                  >
                    <Link
                      href="/portfolio"
                      className="group inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-medium text-white transition-all hover:bg-primary/90 hover:shadow-lg"
                    >
                      Explore Portfolio
                      <Icons.arrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-3 text-base font-medium text-white transition-all hover:bg-white hover:text-primary hover:shadow-lg"
                    >
                      Get in Touch
                      <Icons.mail className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
                    </Link>
                  </motion.div>

                  {/* Trust Indicators */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-12"
                  >
                    <p className="text-sm font-medium uppercase tracking-wider text-gray-300">
                      Trusted by Industry Leaders
                    </p>
                    <div className="mt-4 flex items-center justify-center space-x-8">
                      {['Goldman Sachs', 'BlackRock', 'Brookfield', 'Masdar'].map((partner, index) => (
                        <motion.span
                          key={partner}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                          className="text-sm font-medium text-gray-300"
                        >
                          {partner}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm font-medium text-white">Scroll to explore</span>
          <Icons.chevronDown className="mt-2 h-6 w-6 animate-bounce text-white" />
        </div>
      </motion.div>
    </section>
  )
} 