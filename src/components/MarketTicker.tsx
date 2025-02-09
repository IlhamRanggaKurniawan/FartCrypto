"use client"

import { CryptoCoin } from "@/types";
import { ArrowDown, ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const MarketTicker = () => {
    const [coins, setCoins] = useState<CryptoCoin[]>([])

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=9&page=1', {
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
        <div className='bg-gray-900 border-y border-purple-600 w-full h-16 flex overflow-hidden'>
            <div className="flex min-w-max animate-marquee whitespace-nowrap">
                {[...coins, ...coins].map((coin, index) => (
                    <div key={index} className="flex h-full items-center justify-between px-6 space-x-4">
                        <span className="text-pink-400 font-semibold">{coin.symbol}</span>
                        <span className="text-white">${coin.current_price.toLocaleString()}</span>
                        <span className={`flex items-center gap-1 ${coin.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-500"}`}>
                            {coin.price_change_percentage_24h > 0 ? <ArrowUp /> : <ArrowDown />}
                            {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MarketTicker