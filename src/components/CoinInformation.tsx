"use client"

import { CryptoCoin } from '@/types'
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

    if (loading) {
        return <div className="text-center py-20 text-white text-xl">Loading...</div>
    }

    return (
        <div className='w-full border border-white rounded-md p-6 space-y-8'>
            <div className='space-y-2'>
                <div className='flex items-center gap-2'>
                    <Image src={coin!.image} alt={coin!.id} width={30} height={30} />
                    <h3 className='font-semibold text-lg'>{coin?.name} ({coin?.symbol.toUpperCase()})</h3>
                </div>
                <p className='text-3xl font-bold'>${coin?.current_price}</p>
            </div>
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4'>
                <div>
                    <p className='text-sm font-light'>Market Cap Rank</p>
                    <span className='text-xl font-bold'>#1</span>
                </div>
                <div>
                    <p className='text-sm font-light'>Market Cap</p>
                    <span className='text-xl font-bold'>$1.918.269.253.818</span>
                </div>
                <div>
                    <p className='text-sm font-light'>24h Trading Volume</p>
                    <span className='text-xl font-bold'>$30.059.060.822</span>
                </div>
                <div>
                    <p className='text-sm font-light'>24h Change</p>
                    <span className='text-xl font-bold'>0.46%</span>
                </div>

            </div>
        </div>
    )
}

export default CoinInformation