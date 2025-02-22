import { BlogGrid } from '@/components/sections/insights/BlogGrid'
import { FeaturedPost } from '@/components/sections/insights/FeaturedPost'
import { CategoryFilter } from '@/components/sections/insights/CategoryFilter'

export const metadata = {
  title: 'Insights & News | Allyship Global Ltd',
  description: 'Stay informed with the latest investment insights, market analysis, and industry news from Allyship Global Ltd.',
}

export default function InsightsPage() {
  return (
    <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">
            Insights & Analysis
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Expert perspectives on global markets, investment strategies, and industry trends.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mt-16">
          <FeaturedPost />
        </div>

        {/* Category Filter */}
        <div className="mt-16">
          <CategoryFilter />
        </div>

        {/* Blog Grid */}
        <div className="mt-8">
          <BlogGrid />
        </div>
      </div>
    </main>
  )
} 