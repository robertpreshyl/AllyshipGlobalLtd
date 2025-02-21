'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface VideoBackgroundProps {
  src: string
  fallbackImage: string
  onError?: () => void
}

export function VideoBackground({ src, fallbackImage, onError }: VideoBackgroundProps) {
  const [isClient, setIsClient] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (isClient && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.warn('Video autoplay failed:', error)
        setHasError(true)
        onError?.()
      })
    }
  }, [isClient, onError])

  // Handle video loading errors
  const handleVideoError = () => {
    setHasError(true)
    onError?.()
  }

  // Server-side and initial client render
  if (!isClient || hasError) {
    return (
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src={fallbackImage}
          alt="Video fallback"
          fill
          className="object-cover"
          priority
        />
      </div>
    )
  }

  // Client-side render
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10" />
      <video
        ref={videoRef}
        className={`h-full w-full object-cover transition-opacity duration-500 ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
        onError={handleVideoError}
      >
        <source src={src} type="video/mp4" />
      </video>
      {!isVideoLoaded && (
        <Image
          src={fallbackImage}
          alt="Video fallback"
          fill
          className="object-cover"
          priority
        />
      )}
    </div>
  )
} 