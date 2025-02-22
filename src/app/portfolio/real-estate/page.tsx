import { type Metadata } from 'next'
import Image from 'next/image'
import { Icons } from '@/components/common/Icons'

type IconName = keyof typeof Icons

export const metadata: Metadata = {
  title: 'Real Estate Investment Portfolio | Allyship Global Ltd',
  description: 'Explore our global real estate investment portfolio, featuring premium commercial and residential properties across strategic locations worldwide.',
}

export default function RealEstatePage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30 py-24 lg:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">
              Global Real Estate Portfolio
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Strategic investments in premium properties across key global markets, delivering sustainable returns through innovative real estate solutions.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-primary/5" />
      </section>

      {/* Investment Approach */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-heading text-3xl font-bold">Our Investment Approach</h2>
              <p className="mt-4 text-muted-foreground">
                At Allyship Global, we take a strategic approach to real estate investment, focusing on:
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  {Icons.building && <Icons.building className="mr-3 h-6 w-6 text-primary" />}
                  <div>
                    <h3 className="font-semibold">Premium Commercial Properties</h3>
                    <p className="text-muted-foreground">Grade A office spaces in prime business districts</p>
                  </div>
                </li>
                <li className="flex items-start">
                  {Icons.home && <Icons.home className="mr-3 h-6 w-6 text-primary" />}
                  <div>
                    <h3 className="font-semibold">Residential Developments</h3>
                    <p className="text-muted-foreground">Luxury and mid-market residential projects in high-growth areas</p>
                  </div>
                </li>
                <li className="flex items-start">
                  {Icons.briefcase && <Icons.briefcase className="mr-3 h-6 w-6 text-primary" />}
                  <div>
                    <h3 className="font-semibold">Mixed-Use Projects</h3>
                    <p className="text-muted-foreground">Integrated developments combining retail, office, and residential spaces</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/portfolio/real-estate-1.svg"
                alt="Real Estate Investment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Markets */}
      <section className="border-t bg-muted/30 py-16 lg:py-24">
        <div className="container">
          <h2 className="text-center font-heading text-3xl font-bold">Key Markets</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Our real estate portfolio spans major global markets, with a focus on regions showing strong growth potential and stable returns.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                region: 'Asia Pacific',
                description: 'Premium commercial properties in Singapore, Tokyo, and emerging markets in Vietnam',
                focus: 'Office towers and retail complexes',
              },
              {
                region: 'Middle East',
                description: 'Luxury developments in Dubai and Abu Dhabi',
                focus: 'Mixed-use developments and residential projects',
              },
              {
                region: 'Europe',
                description: 'Strategic investments in London, Paris, and Berlin',
                focus: 'Historic properties and modern office spaces',
              },
            ].map((market) => (
              <div
                key={market.region}
                className="rounded-lg border bg-background p-6 shadow-sm"
              >
                <h3 className="mb-3 font-heading text-xl font-semibold">{market.region}</h3>
                <p className="mb-4 text-muted-foreground">{market.description}</p>
                <p className="text-sm font-medium text-primary">Focus: {market.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Strategy */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold">Investment Strategy</h2>
            <p className="mt-4 text-muted-foreground">
              Our real estate investment strategy combines thorough market analysis, risk management, and sustainable development practices.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Market Analysis',
                description: 'Comprehensive research of market trends and growth potential',
                icon: 'barChart' as IconName,
              },
              {
                title: 'Risk Management',
                description: 'Diversified portfolio approach with strategic risk mitigation',
                icon: 'shield' as IconName,
              },
              {
                title: 'Sustainability',
                description: 'Focus on green building practices and energy efficiency',
                icon: 'zap' as IconName,
              },
              {
                title: 'Value Creation',
                description: 'Active asset management to maximize property value',
                icon: 'target' as IconName,
              },
            ].map((strategy) => {
              const Icon = Icons[strategy.icon] || Icons.target
              return (
                <div
                  key={strategy.title}
                  className="rounded-lg border bg-background p-6 shadow-sm"
                >
                  {Icon && <Icon className="mb-4 h-8 w-8 text-primary" />}
                  <h3 className="mb-2 font-heading text-lg font-semibold">{strategy.title}</h3>
                  <p className="text-sm text-muted-foreground">{strategy.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/30 py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold">Partner With Us</h2>
            <p className="mt-4 text-muted-foreground">
              Explore investment opportunities in our real estate portfolio and benefit from our global expertise and proven track record.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="/contact"
                className="rounded-full bg-primary px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
              >
                Contact Our Team
              </a>
              <a
                href="/portfolio"
                className="rounded-full border border-input bg-background px-8 py-3 text-sm font-medium transition-colors hover:bg-muted"
              >
                View All Sectors
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 