import { type Metadata } from 'next'
import Image from 'next/image'
import { Icons } from '@/components/common/Icons'

type IconName = keyof typeof Icons

export const metadata: Metadata = {
  title: 'Import/Export Trade Portfolio | Allyship Global Ltd',
  description: 'Explore our global trade and logistics portfolio, facilitating international commerce through innovative solutions and strategic partnerships.',
}

export default function TradePage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30 py-24 lg:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">
              Global Trade & Logistics
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Facilitating international commerce through innovative trade solutions and strategic partnerships across key global markets.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-primary/5" />
      </section>

      {/* Trade Focus */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-heading text-3xl font-bold">Trade Focus</h2>
              <p className="mt-4 text-muted-foreground">
                Our trade portfolio encompasses key areas of international commerce and logistics:
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  {Icons.ship && <Icons.ship className="mr-3 h-6 w-6 text-primary" />}
                  <div>
                    <h3 className="font-semibold">Maritime Trade</h3>
                    <p className="text-muted-foreground">Global shipping and port operations</p>
                  </div>
                </li>
                <li className="flex items-start">
                  {Icons.briefcase && <Icons.briefcase className="mr-3 h-6 w-6 text-primary" />}
                  <div>
                    <h3 className="font-semibold">Cross-Border Commerce</h3>
                    <p className="text-muted-foreground">International trade facilitation and financing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  {Icons.target && <Icons.target className="mr-3 h-6 w-6 text-primary" />}
                  <div>
                    <h3 className="font-semibold">Supply Chain Solutions</h3>
                    <p className="text-muted-foreground">End-to-end logistics and distribution networks</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/portfolio/trade-1.svg"
                alt="Global Trade Operations"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trade Routes */}
      <section className="border-t bg-muted/30 py-16 lg:py-24">
        <div className="container">
          <h2 className="text-center font-heading text-3xl font-bold">Key Trade Routes</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Our strategic presence along major trade routes enables efficient global commerce and value creation.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                route: 'Asia-Europe Corridor',
                description: 'Maritime and land-based trade routes connecting Asian manufacturing hubs with European markets',
                volume: '$2.5B annual trade volume',
              },
              {
                route: 'MENA Trade Network',
                description: 'Strategic trade infrastructure across Middle East and North Africa',
                volume: '$1.8B annual trade volume',
              },
              {
                route: 'Americas Trade Link',
                description: 'North-South American trade corridor facilitating cross-continental commerce',
                volume: '$2.2B annual trade volume',
              },
            ].map((route) => (
              <div
                key={route.route}
                className="rounded-lg border bg-background p-6 shadow-sm"
              >
                <h3 className="mb-3 font-heading text-xl font-semibold">{route.route}</h3>
                <p className="mb-4 text-muted-foreground">{route.description}</p>
                <p className="text-sm font-medium text-primary">{route.volume}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Innovation */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold">Trade Innovation</h2>
            <p className="mt-4 text-muted-foreground">
              We invest in innovative solutions that are transforming global trade and logistics operations.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Digital Trade',
                description: 'Blockchain-based trade documentation',
                icon: 'newspaper' as IconName,
              },
              {
                title: 'Smart Logistics',
                description: 'IoT-enabled supply chain tracking',
                icon: 'target' as IconName,
              },
              {
                title: 'Green Shipping',
                description: 'Sustainable maritime solutions',
                icon: 'ship' as IconName,
              },
              {
                title: 'Last Mile Innovation',
                description: 'Advanced delivery technologies',
                icon: 'briefcase' as IconName,
              },
            ].map((innovation) => {
              const Icon = Icons[innovation.icon] || Icons.target
              return (
                <div
                  key={innovation.title}
                  className="rounded-lg border bg-background p-6 shadow-sm"
                >
                  {Icon && <Icon className="mb-4 h-8 w-8 text-primary" />}
                  <h3 className="mb-2 font-heading text-lg font-semibold">{innovation.title}</h3>
                  <p className="text-sm text-muted-foreground">{innovation.description}</p>
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
              Join our network of global trade partners and benefit from our extensive experience and innovative solutions.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="/contact"
                className="rounded-full bg-primary px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
              >
                Discuss Opportunities
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