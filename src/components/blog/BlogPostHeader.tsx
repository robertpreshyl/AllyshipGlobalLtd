'use client'

import { Icons } from '@/components/common/Icons'

interface BlogPostHeaderProps {
  category: string
  date: string
  title: string
  author: {
    name: string
    readTime: string
  }
}

export function BlogPostHeader({ category, date, title, author }: BlogPostHeaderProps) {
  return (
    <header className="mb-12">
      <div className="flex items-center space-x-4">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {category}
        </span>
        <span className="text-sm text-muted-foreground">{date}</span>
      </div>
      <h1 className="mt-4 font-heading text-4xl font-bold sm:text-5xl">
        {title}
      </h1>
      <div className="mt-6 flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Icons.user className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm">{author.name}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Icons.clock className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm">{author.readTime}</span>
        </div>
      </div>
    </header>
  )
} 