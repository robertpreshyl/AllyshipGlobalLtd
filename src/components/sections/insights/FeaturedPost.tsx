'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Icons } from '@/components/common/Icons'
import { AnimatedTooltip } from '@/components/ui/animated-tooltip'

export function FeaturedPost() {
  // This will be replaced with actual data from the CMS
  const featuredPost = {
    slug: 'global-investment-trends-2024',
    title: 'Global Investment Trends: Navigating Markets in 2024',
    excerpt:
      'An in-depth analysis of emerging investment opportunities across key markets and sectors, with expert insights on navigating the evolving financial landscape.',
    author: {
      id: 1,
      name: 'Robert Smith',
      designation: 'Chief Investment Officer',
      image: '/images/team/robert-smith.svg',
    },
    category: 'Market Analysis',
    readTime: '8 min read',
    publishDate: 'March 15, 2024',
    coverImage: '/images/blog/investment-trends-2024.svg'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="overflow-hidden rounded-lg border bg-background shadow-sm transition-shadow hover:shadow-md"
    >
      <Link href={`/insights/posts/${featuredPost.slug}`} className="block">
        <div className="aspect-[21/9] relative">
          <Image
            src={featuredPost.coverImage}
            alt={featuredPost.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6">
          <div className="flex items-center space-x-3">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {featuredPost.category}
            </span>
            <span className="text-xs text-muted-foreground">
              {featuredPost.publishDate}
            </span>
          </div>

          <h2 className="mt-4 font-heading text-2xl font-semibold hover:text-primary">
            {featuredPost.title}
          </h2>

          <p className="mt-2 text-muted-foreground">{featuredPost.excerpt}</p>

          <div className="mt-6 flex items-center justify-between">
            <AnimatedTooltip items={[featuredPost.author]} />
            <div className="flex items-center text-sm text-muted-foreground">
              <Icons.clock className="mr-2 h-4 w-4" />
              {featuredPost.readTime}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
} 