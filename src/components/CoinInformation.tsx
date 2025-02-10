"use client"

import { CryptoCoin } from '@/types'
import { ArrowDown, ArrowUp } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const CoinInformation = ({ coinId }: { coinId: string }) => {
    const [coin, setCoin] = useState<CryptoCoin>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinId}`, {
                    next: { revalidate: 45 },
                })
                const data = await res.json()
                setCoin(data[0])
            } catch (error) {
                console.error('Error fetching crypto data:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchCoins()
    }, [coinId])

    if (loading && !coin) {
        return <div className="text-center py-20 text-white text-xl">Loading...</div>
    }

    return (
        <div className='w-full border border-white rounded-md p-6 space-y-8'>
            <div className='space-y-2'>
                <div className='flex items-center gap-2'>
                    <Image src={coin!.image} alt={coin!.id} width={30} height={30} />
                    <h3 className='font-semibold text-lg'>{coin?.name} ({coin?.symbol.toUpperCase()})</h3>
                </div>
                <p className='text-3xl font-bold'>${coin?.current_price.toLocaleString(undefined, { maximumFractionDigits: 20 })}</p>
            </div>
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4'>
                <div>
                    <p className='text-sm font-light'>Market Cap Rank</p>
                    <span className='text-xl font-bold'>#{coin?.market_cap_rank}</span>
                </div>
                <div>
                    <p className='text-sm font-light'>Market Cap</p>
                    <span className='text-xl font-bold'>${coin?.market_cap.toLocaleString()}</span>
                </div>
                <div>
                    <p className='text-sm font-light'>Total Supply</p>
                    <span className='text-xl font-bold'>{coin?.total_supply.toLocaleString()}</span>
                </div>
                <div>
                    <p className='text-sm font-light'>24h Change</p>
                    <span className={`text-xl font-bold flex ${coin!.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-500"}`}>
                        {coin!.price_change_percentage_24h > 0 ? <ArrowUp /> : <ArrowDown />}

                        {Math.abs(coin!.price_change_percentage_24h).toFixed(2)}%</span>
                </div>

            </div>
        </div>
    )
}

export default CoinInformation