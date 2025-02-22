import { type Metadata } from 'next'
import Image from 'next/image'
import { Icons } from '@/components/common/Icons'

type IconName = keyof typeof Icons

export const metadata: Metadata = {
  title: 'Technology Investment Portfolio | Allyship Global Ltd',
  description: 'Explore our technology investment portfolio, featuring cutting-edge solutions in AI, blockchain, and emerging technologies.',
}

export default function TechnologyPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30 py-24 lg:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">
              Technology & Innovation
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Investing in transformative technologies that shape the future of industries and drive digital innovation.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-primary/5" />
      </section>

      {/* Investment Areas */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-heading text-3xl font-bold">Investment Areas</h2>
              <p className="mt-4 text-muted-foreground">
                Our technology portfolio spans across key sectors driving digital transformation and innovation:
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  {Icons.cpu && <Icons.cpu className="mr-3 h-6 w-6 text-primary" />}
                  <div>
                    <h3 className="font-semibold">AI & Machine Learning</h3>
                    <p className="text-muted-foreground">Advanced AI solutions and machine learning platforms</p>
                  </div>
                </li>
                <li className="flex items-start">
                  {Icons.cloud && <Icons.cloud className="mr-3 h-6 w-6 text-primary" />}
                  <div>
                    <h3 className="font-semibold">Cloud Infrastructure</h3>
                    <p className="text-muted-foreground">Enterprise cloud solutions and data centers</p>
                  </div>
                </li>
                <li className="flex items-start">
                  {Icons.shield && <Icons.shield className="mr-3 h-6 w-6 text-primary" />}
                  <div>
                    <h3 className="font-semibold">Cybersecurity</h3>
                    <p className="text-muted-foreground">Next-generation security and privacy solutions</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/portfolio/tech-1.svg"
                alt="Technology Investment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Companies */}
      <section className="border-t bg-muted/30 py-16 lg:py-24">
        <div className="container">
          <h2 className="text-center font-heading text-3xl font-bold">Portfolio Companies</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Our investments in leading technology companies are driving innovation across multiple sectors.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'AI Solutions Corp',
                sector: 'Artificial Intelligence',
                location: 'Silicon Valley',
                focus: 'Enterprise AI Solutions',
              },
              {
                name: 'CloudTech Systems',
                sector: 'Cloud Computing',
                location: 'Singapore',
                focus: 'Cloud Infrastructure',
              },
              {
                name: 'SecureNet Technologies',
                sector: 'Cybersecurity',
                location: 'London',
                focus: 'Enterprise Security',
              },
            ].map((company) => (
              <div
                key={company.name}
                className="rounded-lg border bg-background p-6 shadow-sm"
              >
                <h3 className="mb-3 font-heading text-xl font-semibold">{company.name}</h3>
                <p className="mb-2 text-muted-foreground">{company.sector}</p>
                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Location:</span> {company.location}</p>
                  <p><span className="font-medium">Focus:</span> {company.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Focus */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold">Innovation Focus</h2>
            <p className="mt-4 text-muted-foreground">
              Our investment strategy targets key technological trends that are reshaping industries and creating new opportunities.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Digital Transformation',
                description: 'Enabling enterprise-wide digital evolution',
                icon: 'layout' as IconName,
              },
              {
                title: 'Data Analytics',
                description: 'Advanced analytics and insights platforms',
                icon: 'barChart' as IconName,
              },
              {
                title: 'IoT Solutions',
                description: 'Connected devices and smart infrastructure',
                icon: 'cpu' as IconName,
              },
              {
                title: 'Fintech',
                description: 'Next-gen financial technology solutions',
                icon: 'briefcase' as IconName,
              },
            ].map((focus) => {
              const Icon = Icons[focus.icon] || Icons.target
              return (
                <div
                  key={focus.title}
                  className="rounded-lg border bg-background p-6 shadow-sm"
                >
                  {Icon && <Icon className="mb-4 h-8 w-8 text-primary" />}
                  <h3 className="mb-2 font-heading text-lg font-semibold">{focus.title}</h3>
                  <p className="text-sm text-muted-foreground">{focus.description}</p>
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
              Join our network of technology innovators and benefit from our expertise in scaling transformative solutions.
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