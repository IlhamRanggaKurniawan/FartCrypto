import CryptoCoinList from '@/components/CryptoCoinList'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = async() => {

  return (
    <>
        <Navbar />
        <CryptoCoinList />
    </>
  )
}

export default page