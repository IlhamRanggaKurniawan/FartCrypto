import AdvantageSection from '@/components/AdvantageSection'
import GuideSection from '@/components/GuideSection'
import HeroSection from '@/components/HeroSection'
import MarketTicker from '@/components/MarketTicker'
import TopCoinsSection from '@/components/TopCoinsSection'
import React from 'react'

const page = () => {
  return (
    <>
      <HeroSection />
      <MarketTicker />
      <AdvantageSection />
      <GuideSection />
      <TopCoinsSection />
    </>
  )
}

export default page