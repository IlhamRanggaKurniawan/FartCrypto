"use client"

import React, { useEffect, useState } from 'react'
import CryptoCard from './CryptoCard'
import { CryptoCoin } from '@/types'

const CryptoCoinList = () => {
    const [coins, setCoins] = useState<CryptoCoin[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=90&page=1', {
                    next: { revalidate: 45 },
                })
                const data = await res.json()
                setCoins(data)
            } catch (error) {
                console.error('Error fetching crypto data:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchCoins()
    }, [])

    if (loading) {
        return <div className="text-center py-20 text-white text-xl">Loading...</div>
    }

    return (
        <div className='py-20 grid grid-cols-1 gap-6 px-4 xl:px-40 xl:grid-cols-3'>
            {coins.map((coin: CryptoCoin) => (
                <CryptoCard
                    image={coin.image}
                    changes={coin.price_change_percentage_24h}
                    marketCap={coin.market_cap}
                    name={coin.name}
                    price={coin.current_price}
                    symbol={coin.symbol}
                    key={coin.id}
                />
            ))}
        </div>
    )
}

export default CryptoCoinList