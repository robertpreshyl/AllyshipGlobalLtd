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
    id: '1',
    name: 'John Smith',
    position: 'Chief Executive Officer',
    bio: 'Over 20 years of experience in international investment and cross-border partnerships.',
    imageUrl: '/images/team/john-smith.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/john-smith',
      twitter: 'https://twitter.com/johnsmith',
    },
  },
  {
    id: '2',
    name: 'Sarah Chen',
    position: 'Chief Investment Officer',
    bio: 'Expert in emerging markets and sustainable investment strategies.',
    imageUrl: '/images/team/sarah-chen.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/sarah-chen',
    },
  },
  {
    id: '3',
    name: 'Mohammed Al-Rashid',
    position: 'Head of Global Partnerships',
    bio: 'Specializes in building strategic alliances across Middle East and Asia.',
    imageUrl: '/images/team/mohammed-al-rashid.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/mohammed-al-rashid',
      twitter: 'https://twitter.com/malrashid',
    },
  },
  {
    id: '4',
    name: 'Elena Petrova',
    position: 'Director of Operations',
    bio: 'Drives operational excellence and digital transformation initiatives.',
    imageUrl: '/images/team/elena-petrova.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/elena-petrova',
    },
  },
]

export function LeadershipTeam() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

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
                {/* Placeholder gradient while image loads */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                
                {/* Replace with actual images once available */}
                <div className="flex h-full items-center justify-center">
                  <Icons.user className="h-32 w-32 text-muted-foreground/20" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="mb-1 font-heading text-xl font-semibold">{member.name}</h3>
              <p className="mb-2 text-sm text-primary">{member.position}</p>
              <p className="mb-4 text-sm text-muted-foreground">{member.bio}</p>

              {/* Social Links */}
              <div className="flex space-x-3">
                {member.socialLinks.linkedin && (
                  <Link
                    href={member.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Icons.linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                )}
                {member.socialLinks.twitter && (
                  <Link
                    href={member.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Icons.twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
} 