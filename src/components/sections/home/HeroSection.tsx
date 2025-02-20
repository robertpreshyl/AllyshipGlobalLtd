'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from 'framer-motion'

const VideoBackground = dynamic(() => import('@/components/common/VideoBackground').then(mod => mod.VideoBackground), {
  ssr: false,
})

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section className="relative h-screen w-full">
      {isMounted && <VideoBackground
        src="/videos/hero-background.mp4"
        fallbackImage="/images/hero-fallback.svg"
      />}
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