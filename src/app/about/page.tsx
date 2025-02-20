import { type Metadata } from 'next'
import { motion } from 'framer-motion'

import { Timeline } from '@/components/sections/about/Timeline'
import { LeadershipTeam } from '@/components/sections/about/LeadershipTeam'
import { Values } from '@/components/sections/about/Values'
import { GlobalPresence } from '@/components/sections/about/GlobalPresence'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our mission, values, and the team behind Allyship Global Limited.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-heading text-4xl font-bold md:text-5xl">
              About Allyship Global
            </h1>
            <p className="text-xl text-muted-foreground">
              Bridging investment opportunities across borders and sectors through strategic partnerships
              and innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-12 font-heading text-3xl font-bold">
              Our Mission & Vision
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border bg-muted/50 p-6">
                <h3 className="mb-4 font-heading text-xl font-semibold">Our Mission</h3>
                <p className="text-muted-foreground">
                  To facilitate and nurture cross-border investment partnerships that create sustainable
                  value for all stakeholders while promoting global economic cooperation.
                </p>
              </div>
              <div className="rounded-lg border bg-muted/50 p-6">
                <h3 className="mb-4 font-heading text-xl font-semibold">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become the world's most trusted platform for international investment
                  collaboration, setting new standards for transparency and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company History Timeline */}
      <section className="border-t bg-muted py-16 md:py-24">
        <div className="container">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold">Our Journey</h2>
          <Timeline />
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold">Leadership Team</h2>
          <LeadershipTeam />
        </div>
      </section>

      {/* Global Presence */}
      <section className="border-t bg-muted py-16 md:py-24">
        <div className="container">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold">Global Presence</h2>
          <GlobalPresence />
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold">Our Values</h2>
          <Values />
        </div>
      </section>
    </>
  )
} 