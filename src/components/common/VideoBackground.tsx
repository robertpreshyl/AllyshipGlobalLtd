'use client'

import Image from 'next/image'

interface VideoBackgroundProps {
  src: string
  fallbackImage: string
  onError?: () => void
}

export function VideoBackground({ src, fallbackImage, onError }: VideoBackgroundProps) {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-black/50" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
        onError={onError}
      >
        <source src={src} type="video/mp4" />
        <Image
          src={fallbackImage}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
      </video>
    </div>
  )
} 