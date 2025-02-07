import React from 'react'
import Button from './Button'

const HeroSection = () => {
  return (
    <main className='w-full h-screen bg-gradient-to-br from-purple-950 to-black py-16 flex flex-col items-center justify-center text-center px-5 gap-6 md:px-10 md:gap-10'>
      <h2 className='font-extrabold text-5xl md:text-7xl'>Visualize the <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>Crypto Universe</span></h2>
      <p className='text-xl font-medium md:text-2xl lg:text-3xl xl:w-[70%]'>Dive into comprehensive cryptocurrency data with stunning visualizations and real-time insights.</p>
      <Button>
        <p className='font-bold lg:text-lg'>Explore Data</p>
      </Button>
    </main>
  )
}

export default HeroSection