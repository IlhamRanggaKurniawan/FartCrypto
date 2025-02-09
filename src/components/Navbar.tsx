import React from 'react'
import Button from './Button'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='w-full h-16 flex justify-between items-center px-4 fixed bg-black z-20 sm:px-6 md:px-8 lg:px-14 '>
      <Link href="/" >
        <h1 className='font-bold w-fit text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>FartCrypto</h1>
      </Link>
      <Link href="/market">
        <Button>
          <p className='font-bold text-sm'>Explore Data</p>
        </Button>
      </Link>
    </header>
  )
}

export default Navbar