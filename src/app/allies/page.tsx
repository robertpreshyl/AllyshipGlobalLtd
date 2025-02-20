import { type Metadata } from 'next'

import { PartnerNetwork } from '@/components/sections/allies/PartnerNetwork'
import { SuccessStories } from '@/components/sections/allies/SuccessStories'
import { PartnershipForm } from '@/components/sections/allies/PartnershipForm'
import { PartnerLogos } from '@/components/sections/allies/PartnerLogos'

export const metadata: Metadata = {
  title: 'Allies & Partnerships',
  description: 'Join our global network of partners and explore strategic investment opportunities worldwide.',
}

export default function AlliesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-heading text-4xl font-bold md:text-5xl">
              Our Global Partners
            </h1>
            <p className="text-xl text-muted-foreground">
              Join our network of international allies and unlock strategic investment opportunities
              across borders and sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Network */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold">Partner Network</h2>
          <PartnerNetwork />
        </div>
      </section>

      {/* Success Stories */}
      <section className="border-t bg-muted py-16 md:py-24">
        <div className="container">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold">Success Stories</h2>
          <SuccessStories />
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold">Trusted By Industry Leaders</h2>
          <PartnerLogos />
        </div>
      </section>

      {/* Partnership Form */}
      <section className="border-t bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold">Become an Ally</h2>
            <p className="mb-12 text-muted-foreground">
              Interested in partnering with us? Fill out the form below and our team will get in touch
              with you to discuss potential opportunities.
            </p>
            <PartnershipForm />
          </div>
        </div>
      </section>
    </>
  )
} 