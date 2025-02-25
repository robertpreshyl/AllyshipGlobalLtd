import { type Metadata } from 'next'

import { SectorGrid } from '@/components/sections/portfolio/SectorGrid'
import { ProjectShowcase } from '@/components/sections/portfolio/ProjectShowcase'
import { CaseStudies } from '@/components/sections/portfolio/CaseStudies'
import { InvestmentDashboard } from '@/components/sections/portfolio/InvestmentDashboard'

export const metadata: Metadata = {
  title: 'Investment Portfolio',
  description: 'Explore our diverse portfolio of investments across real estate, energy, technology, and global trade.',
}

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-heading text-4xl font-bold md:text-5xl">
              Our Investment Portfolio
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover our strategic investments across multiple sectors, delivering sustainable value
              and global impact.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Dashboard */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold">Portfolio Performance</h2>
          <InvestmentDashboard />
        </div>
      </section>

      {/* Sector Grid with Filters */}
      <section className="border-t py-16 md:py-24">
        <div className="container">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold">Investment Sectors</h2>
          <SectorGrid />
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <section className="border-t bg-muted py-16 md:py-24">
        <div className="container">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold">Featured Projects</h2>
          <ProjectShowcase />
        </div>
      </section>

      {/* Case Studies */}
      <section className="border-t py-16 md:py-24">
        <div className="container">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold">Success Stories</h2>
          <CaseStudies />
        </div>
      </section>
    </>
  )
} 