'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface VideoBackgroundProps {
  src: string
  fallbackImage: string
  onError?: () => void
}

export function VideoBackground({ src, fallbackImage, onError }: VideoBackgroundProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const video = document.createElement('video')
    video.src = src
    
    video.onloadeddata = () => {
      setIsVideoLoaded(true)
    }
    
    video.onerror = () => {
      setHasError(true)
      onError?.()
    }

    return () => {
      video.onloadeddata = null
      video.onerror = null
    }
  }, [src, onError])

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-black/50" />
      
      {!hasError && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`h-full w-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onError={() => {
            setHasError(true)
            onError?.()
          }}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      {/* Fallback image shown during video load or on error */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${
        (!isVideoLoaded || hasError) ? 'opacity-100' : 'opacity-0'
      }`}>
        <Image
          src={fallbackImage}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
} 