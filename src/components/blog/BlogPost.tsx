'use client'

import { Icons } from '@/components/common/Icons'
import { BlogPostHeader } from './BlogPostHeader'

interface BlogPostProps {
  category: string
  date: string
  title: string
  author: {
    name: string
    readTime: string
  }
  children: React.ReactNode
}

export function BlogPost({ category, date, title, author, children }: BlogPostProps) {
  return (
    <article className="container mx-auto max-w-4xl py-12">
      <BlogPostHeader
        category={category}
        date={date}
        title={title}
        author={author}
      />
      <div className="prose prose-lg max-w-none">
        {children}
      </div>
    </article>
  )
} 