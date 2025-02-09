"use client"

import React, { useEffect, useState } from 'react'
import TopCoinCard from './TopCoinCard'
import { CryptoCoin } from '@/types'

const TopCoinsSection = () => {
    const [coins, setCoins] = useState<CryptoCoin[]>([])

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1', {
                    next: { revalidate: 45 },
                })
                const data = await res.json()
                setCoins(data)
            } catch (error) {
                console.error('Error fetching crypto data:', error)
            }
        }

        fetchCoins()
    }, [])

    return (
        <div className='px-4 flex flex-col items-center gap-8 py-16 bg-gray-900 md:py-28 md:gap-14 md:px-6'>
            <h3 className='w-full font-bold text-3xl text-center md:text-4xl'>Top 6 by Market Cap</h3>
            <div className='grid grid-cols-1 gap-8 w-full md:grid-cols-2 xl:grid-cols-3'>
                {coins.map((coin, index) => (
                    <TopCoinCard changes={coin.price_change_percentage_24h} marketCap={coin.market_cap} name={coin.name} price={coin.current_price} rank={index + 1} symbol={coin.symbol} key={coin.id} />
                ))}
            </div>
        </div>
    )
}

export default TopCoinsSection