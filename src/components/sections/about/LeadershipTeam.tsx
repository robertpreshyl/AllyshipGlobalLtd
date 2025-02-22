'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Icons } from '@/components/common/Icons'

interface TeamMember {
  id: string
  name: string
  position: string
  bio: string
  imageUrl: string
  socialLinks: {
    linkedin?: string
    twitter?: string
  }
}

const teamMembers: TeamMember[] = [
  {
    id: 'robert-smith',
    name: 'Robert Smith',
    position: 'Chief Executive Officer',
    bio: 'Former investment banker with 20+ years of experience in global markets.',
    imageUrl: '/images/team/robert-smith.svg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/robert-smith',
      twitter: 'https://twitter.com/robertsmith'
    }
  },
  {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    position: 'Chief Investment Officer',
    bio: 'Expert in cross-border investments with focus on Asian markets.',
    imageUrl: '/images/team/sarah-chen.svg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/sarah-chen'
    }
  },
  {
    id: 'michael-patel',
    name: 'Michael Patel',
    position: 'Head of Technology',
    bio: 'Technology veteran specializing in fintech and blockchain solutions.',
    imageUrl: '/images/team/michael-patel.svg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/michael-patel',
      twitter: 'https://twitter.com/mpatel'
    }
  },
  {
    id: 'emma-mueller',
    name: 'Emma Mueller',
    position: 'Director of Operations',
    bio: 'Operations expert with extensive experience in European markets.',
    imageUrl: '/images/team/emma-mueller.svg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/emma-mueller'
    }
  }
]

export function LeadershipTeam() {
  const [isMounted, setIsMounted] = useState(false)
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({})

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleImageLoad = (memberId: string) => {
    setLoadedImages((prev) => ({ ...prev, [memberId]: true }))
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      <AnimatePresence mode="wait">
        {isMounted && teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-lg bg-muted"
          >
            {/* Image Container */}
            <div className="aspect-square overflow-hidden">
              <div className="relative h-full w-full bg-muted">
                {!loadedImages[member.id] && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icons.user className="h-32 w-32 text-muted-foreground/20" />
                  </div>
                )}
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className={`object-cover transition-opacity duration-300 group-hover:scale-105 ${
                    loadedImages[member.id] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoad(member.id)}
                />
              </div>
            </div>

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="font-heading text-lg font-semibold">{member.name}</h3>
              <p className="mb-2 text-sm text-gray-300">{member.position}</p>
              <p className="mb-4 text-sm text-gray-300">{member.bio}</p>
              <div className="flex space-x-4">
                {member.socialLinks.linkedin && (
                  <a
                    href={member.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary"
                  >
                    <Icons.linkedin className="h-5 w-5" />
                  </a>
                )}
                {member.socialLinks.twitter && (
                  <a
                    href={member.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary"
                  >
                    <Icons.twitter className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
} 