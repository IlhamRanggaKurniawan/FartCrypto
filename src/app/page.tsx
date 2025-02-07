import AdvantageSection from '@/components/AdvantageSection'
import Footer from '@/components/Footer'
import GuideSection from '@/components/GuideSection'
import HeroSection from '@/components/HeroSection'
import MarketTicker from '@/components/MarketTicker'
import Navbar from '@/components/Navbar'
import TopCoinsSection from '@/components/TopCoinsSection'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MarketTicker />
      <AdvantageSection />
      <GuideSection />
      <TopCoinsSection />
      <Footer />
    </>
  )
}

export default page