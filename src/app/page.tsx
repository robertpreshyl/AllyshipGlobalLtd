import { HeroSection } from '@/components/sections/home/HeroSection'
import { StatsSection } from '@/components/sections/home/StatsSection'
import { SectorsSection } from '@/components/sections/home/SectorsSection'
import { TrustBadgesSection } from '@/components/sections/home/TrustBadgesSection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <SectorsSection />
      <TrustBadgesSection />
    </main>
  )
}
