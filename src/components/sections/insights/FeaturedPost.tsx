'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Icons } from '@/components/common/Icons'

export function FeaturedPost() {
  // This will be replaced with actual data from the CMS
  const featuredPost = {
    slug: 'global-investment-trends-2024',
    title: 'Global Investment Trends: Navigating Markets in 2024',
    excerpt:
      'An in-depth analysis of emerging investment opportunities across key markets and sectors, with expert insights on navigating the evolving financial landscape.',
    author: {
      name: 'Robert Smith',
      role: 'Chief Investment Officer',
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
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-2xl border bg-background shadow-sm"
    >
      <div className="grid gap-8 md:grid-cols-2">
        {/* Image Section */}
        <div className="relative aspect-[16/9] md:aspect-auto">
          <Image
            src={featuredPost.coverImage}
            alt={featuredPost.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="p-8">
          <div className="flex items-center space-x-4">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {featuredPost.category}
            </span>
            <span className="text-xs text-muted-foreground">
              {featuredPost.publishDate}
            </span>
          </div>

          <h2 className="mt-4 font-heading text-2xl font-bold md:text-3xl">
            <Link
              href={`/insights/posts/${featuredPost.slug}`}
              className="hover:text-primary"
            >
              {featuredPost.title}
            </Link>
          </h2>

          <p className="mt-4 text-muted-foreground">
            {featuredPost.excerpt}
          </p>

          <div className="mt-6 flex items-center space-x-4">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                src={featuredPost.author.image}
                alt={featuredPost.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium">{featuredPost.author.name}</p>
              <p className="text-sm text-muted-foreground">{featuredPost.author.role}</p>
            </div>
            <div className="ml-auto flex items-center text-sm text-muted-foreground">
              <Icons.clock className="mr-2 h-4 w-4" />
              {featuredPost.readTime}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 