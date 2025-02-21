'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { VideoBackground } from '@/components/common/VideoBackground'

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  return (
    <section className="relative h-screen w-full">
      {isMounted && !hasError && (
        <VideoBackground
          src="/videos/hero-background.mp4"
          fallbackImage="/images/hero-fallback.svg"
          onError={() => setHasError(true)}
        />
      )}
      {(hasError || !isMounted) && (
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-950" />
      )}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container text-center text-white">
          <AnimatePresence mode="wait">
            {isMounted && (
              <>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-6 font-heading text-5xl font-bold md:text-6xl lg:text-7xl"
                >
                  Uniting Global Allies for Strategic Investments
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mx-auto max-w-2xl text-lg text-gray-200"
                >
                  Building cross-border partnerships and creating value through diverse investment opportunities worldwide.
                </motion.p>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
} 