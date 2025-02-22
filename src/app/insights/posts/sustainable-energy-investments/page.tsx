import { Icons } from '@/components/common/Icons'

export const metadata = {
  title: 'The Rise of Sustainable Energy Investments | Allyship Global Ltd',
  description: 'Explore how green energy investments are reshaping the global investment landscape and creating new opportunities for forward-thinking investors.',
}

const SustainableEnergyPage = () => {
  return (
    <article className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-4">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Industry Insights
            </span>
            <span className="text-sm text-muted-foreground">March 8, 2024</span>
          </div>
          <h1 className="mt-4 font-heading text-4xl font-bold sm:text-5xl">
            The Rise of Sustainable Energy Investments
          </h1>
          <div className="mt-6 flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Icons.user className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">Michael Green</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icons.clock className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">5 min read</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="lead">
            The global transition to sustainable energy represents one of the most
            significant investment opportunities of our time. At Allyship Global Ltd,
            we're at the forefront of identifying and capitalizing on these
            transformative opportunities.
          </p>

          <h2>The Green Energy Revolution</h2>
          <p>
            The sustainable energy sector is experiencing unprecedented growth,
            driven by technological advances, policy support, and increasing
            environmental awareness. Global investment in renewable energy reached
            $500 billion in 2023, with projections indicating this figure could
            double by 2030.
          </p>

          <h3>Key Investment Areas</h3>
          <ul>
            <li>
              <strong>Solar and Wind Infrastructure:</strong> Utility-scale projects
              offering stable, long-term returns
            </li>
            <li>
              <strong>Energy Storage Solutions:</strong> Battery technology and grid
              stabilization systems
            </li>
            <li>
              <strong>Green Hydrogen:</strong> Emerging technology with significant
              industrial applications
            </li>
            <li>
              <strong>Smart Grid Technology:</strong> Digital solutions for energy
              efficiency and distribution
            </li>
          </ul>

          <h2>Market Dynamics and Growth Drivers</h2>
          <p>
            Several factors are accelerating the adoption of sustainable energy:
          </p>
          <ul>
            <li>
              <strong>Policy Support:</strong> Government initiatives and regulatory
              frameworks favoring renewable energy
            </li>
            <li>
              <strong>Cost Reduction:</strong> Declining technology costs making
              renewable projects more competitive
            </li>
            <li>
              <strong>Corporate Demand:</strong> Growing corporate commitments to
              renewable energy sourcing
            </li>
            <li>
              <strong>ESG Integration:</strong> Increasing focus on environmental
              criteria in investment decisions
            </li>
          </ul>

          <h2>Investment Strategies and Opportunities</h2>
          <p>
            At Allyship Global, we've identified several strategic approaches to
            sustainable energy investment:
          </p>

          <h3>1. Direct Project Investment</h3>
          <p>
            Participation in utility-scale renewable energy projects, offering
            stable cash flows and potential tax benefits. Our portfolio includes
            solar farms in the Middle East and wind projects in Northern Europe.
          </p>

          <h3>2. Technology Innovation</h3>
          <p>
            Investment in companies developing breakthrough energy technologies,
            from advanced battery storage to smart grid solutions. We focus on
            scalable solutions with strong intellectual property protection.
          </p>

          <h3>3. Infrastructure Development</h3>
          <p>
            Supporting the build-out of charging networks, grid infrastructure,
            and energy storage facilities. These investments provide essential
            services for the renewable energy ecosystem.
          </p>

          <h2>Risk Management and Due Diligence</h2>
          <p>
            Our approach to sustainable energy investment emphasizes:
          </p>
          <ul>
            <li>Comprehensive technical assessment</li>
            <li>Regulatory compliance evaluation</li>
            <li>Market demand analysis</li>
            <li>Environmental impact studies</li>
            <li>Long-term viability assessment</li>
          </ul>

          <h2>The Allyship Global Advantage</h2>
          <p>
            Our expertise in sustainable energy investments is characterized by:
          </p>
          <ul>
            <li>Deep industry knowledge and technical expertise</li>
            <li>Strong relationships with technology providers</li>
            <li>Global network of energy sector partners</li>
            <li>Proven track record in project development</li>
          </ul>

          <h2>Future Outlook</h2>
          <p>
            The sustainable energy sector continues to evolve rapidly, presenting
            new opportunities for investors. We anticipate significant growth in:
          </p>
          <ul>
            <li>Offshore wind development</li>
            <li>Green hydrogen infrastructure</li>
            <li>Advanced energy storage systems</li>
            <li>Smart grid technology</li>
          </ul>

          <div className="mt-8 rounded-lg border bg-muted p-6">
            <h3 className="mb-4 text-lg font-semibold">Partner With Us</h3>
            <p>
              Ready to explore sustainable energy investment opportunities? Our team
              of experts is here to help you navigate this dynamic sector.
            </p>
            <div className="mt-4">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
              >
                <Icons.mail className="h-4 w-4" />
                <span>Discuss Opportunities</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default SustainableEnergyPage 