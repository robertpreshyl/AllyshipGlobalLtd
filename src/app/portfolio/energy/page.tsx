import { type Metadata } from 'next'
import Image from 'next/image'
import { Icons } from '@/components/common/Icons'

type IconName = keyof typeof Icons

export const metadata: Metadata = {
  title: 'Energy & Sustainability Portfolio | Allyship Global Ltd',
  description: 'Discover our innovative investments in renewable energy and sustainable infrastructure projects worldwide.',
}

export default function EnergyPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30 py-24 lg:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">
              Energy & Sustainability
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Powering the future through strategic investments in renewable energy and sustainable infrastructure projects globally.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-primary/5" />
      </section>

      {/* Investment Focus */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-heading text-3xl font-bold">Investment Focus</h2>
              <p className="mt-4 text-muted-foreground">
                Our energy portfolio focuses on sustainable and renewable energy solutions that drive the global transition to clean energy:
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  {
                    title: 'Solar Energy',
                    description: 'Utility-scale solar farms and distributed solar solutions',
                    icon: 'zap' as IconName,
                  },
                  {
                    title: 'Wind Power',
                    description: 'Onshore and offshore wind farm developments',
                    icon: 'zap' as IconName,
                  },
                  {
                    title: 'Energy Storage',
                    description: 'Grid-scale battery storage and smart grid solutions',
                    icon: 'shield' as IconName,
                  },
                ].map((focus) => {
                  const Icon = Icons[focus.icon] || Icons.target
                  return (
                    <li key={focus.title} className="flex items-start">
                      {Icon && <Icon className="mr-3 h-6 w-6 text-primary" />}
                      <div>
                        <h3 className="font-semibold">{focus.title}</h3>
                        <p className="text-muted-foreground">{focus.description}</p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/portfolio/energy-1.svg"
                alt="Renewable Energy Investment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="border-t bg-muted/30 py-16 lg:py-24">
        <div className="container">
          <h2 className="text-center font-heading text-3xl font-bold">Current Projects</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Our diverse portfolio of energy projects spans multiple continents, delivering clean energy solutions and sustainable returns.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'MENA Solar Initiative',
                location: 'Middle East & North Africa',
                capacity: '2.5 GW',
                impact: 'Powers 1.5M homes',
              },
              {
                name: 'European Wind Portfolio',
                location: 'Northern Europe',
                capacity: '1.8 GW',
                impact: 'CO2 reduction: 2.3M tons/year',
              },
              {
                name: 'Asia Pacific Green Grid',
                location: 'Southeast Asia',
                capacity: '3.2 GW',
                impact: 'Regional grid integration',
              },
            ].map((project) => (
              <div
                key={project.name}
                className="rounded-lg border bg-background p-6 shadow-sm"
              >
                <h3 className="mb-3 font-heading text-xl font-semibold">{project.name}</h3>
                <p className="mb-2 text-muted-foreground">{project.location}</p>
                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Capacity:</span> {project.capacity}</p>
                  <p><span className="font-medium">Impact:</span> {project.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Goals */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold">Sustainability Goals</h2>
            <p className="mt-4 text-muted-foreground">
              Our investments align with global sustainability goals and contribute to the transition towards a low-carbon future.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Carbon Reduction',
                description: 'Target: 50M tons CO2 reduction by 2030',
                icon: 'target' as IconName,
              },
              {
                title: 'Clean Energy Access',
                description: 'Providing renewable energy to 10M+ households',
                icon: 'zap' as IconName,
              },
              {
                title: 'Innovation',
                description: 'Investment in next-gen clean technologies',
                icon: 'cpu' as IconName,
              },
              {
                title: 'Community Impact',
                description: 'Creating sustainable jobs and infrastructure',
                icon: 'users' as IconName,
              },
            ].map((goal) => {
              const Icon = Icons[goal.icon] || Icons.target
              return (
                <div
                  key={goal.title}
                  className="rounded-lg border bg-background p-6 shadow-sm"
                >
                  {Icon && <Icon className="mb-4 h-8 w-8 text-primary" />}
                  <h3 className="mb-2 font-heading text-lg font-semibold">{goal.title}</h3>
                  <p className="text-sm text-muted-foreground">{goal.description}</p>
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
            <h2 className="font-heading text-3xl font-bold">Join the Energy Revolution</h2>
            <p className="mt-4 text-muted-foreground">
              Partner with us to accelerate the global transition to sustainable energy and create lasting environmental impact.
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