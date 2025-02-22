'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Icons } from '@/components/common/Icons'

// This will be replaced with actual data from the CMS
const blogPosts = [
  {
    slug: '/insights/posts/real-estate-opportunities-2024',
    title: 'Emerging Real Estate Opportunities in Global Markets',
    excerpt: 'Discover promising real estate investment opportunities across key global markets.',
    category: 'Market Analysis',
    readTime: '6 min read',
    publishDate: 'March 10, 2024',
    author: {
      name: 'Sarah Chen',
      role: 'Real Estate Director',
    },
  },
  {
    slug: '/insights/posts/sustainable-energy-investments',
    title: 'The Rise of Sustainable Energy Investments',
    excerpt: 'How green energy is reshaping the global investment landscape.',
    category: 'Industry Insights',
    readTime: '5 min read',
    publishDate: 'March 8, 2024',
    author: {
      name: 'Michael Green',
      role: 'Energy Sector Lead',
    },
  },
  {
    slug: '/insights/posts/crypto-market-analysis',
    title: 'Cryptocurrency Market: A Strategic Analysis',
    excerpt: 'Understanding the evolving cryptocurrency market and investment opportunities.',
    category: 'Investment Strategy',
    readTime: '7 min read',
    publishDate: 'March 5, 2024',
    author: {
      name: 'Alex Wong',
      role: 'Digital Assets Analyst',
    },
  },
  {
    slug: '/insights/posts/cross-border-investment-guide',
    title: 'Guide to Cross-Border Investments',
    excerpt: 'Essential strategies for successful international investment ventures.',
    category: 'Educational',
    readTime: '10 min read',
    publishDate: 'March 1, 2024',
    author: {
      name: 'David Miller',
      role: 'Global Strategy Director',
    },
  },
  {
    slug: '/insights/posts/oil-gas-sector-outlook',
    title: 'Oil & Gas Sector: 2024 Outlook',
    excerpt: 'Analysis of trends and opportunities in the energy sector.',
    category: 'Market Analysis',
    readTime: '8 min read',
    publishDate: 'February 28, 2024',
    author: {
      name: 'James Wilson',
      role: 'Energy Markets Analyst',
    },
  },
  {
    slug: '/insights/posts/tech-investment-trends',
    title: 'Technology Investment Trends to Watch',
    excerpt: 'Key technology sectors and companies driving innovation and growth.',
    category: 'Industry Insights',
    readTime: '6 min read',
    publishDate: 'February 25, 2024',
    author: {
      name: 'Lisa Zhang',
      role: 'Technology Investment Lead',
    },
  },
]

export function BlogGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {blogPosts.map((post, index) => (
        <motion.article
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="group overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <Link href={post.slug} className="block">
            <div className="flex items-center space-x-3">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {post.category}
              </span>
              <span className="text-xs text-muted-foreground">
                {post.publishDate}
              </span>
            </div>

            <h3 className="mt-4 font-heading text-xl font-semibold group-hover:text-primary">
              {post.title}
            </h3>

            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
              {post.excerpt}
            </p>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative h-8 w-8 overflow-hidden rounded-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                  <div className="flex h-full items-center justify-center">
                    <Icons.user className="h-5 w-5 text-muted-foreground/20" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">{post.author.name}</p>
                  <p className="text-xs text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <Icons.clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  )
} 