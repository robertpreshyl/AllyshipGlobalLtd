import { HeroSection } from '@/components/sections/home/HeroSection'
import { QuickStats } from '@/components/sections/home/QuickStats'
import { InvestmentSectors } from '@/components/sections/home/InvestmentSectors'
import { TrustBadges } from '@/components/sections/home/TrustBadges'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickStats />
      <InvestmentSectors />
      <TrustBadges />
    </>
  )
}
