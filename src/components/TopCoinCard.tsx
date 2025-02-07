import { TrendingDown, TrendingUp } from 'lucide-react'
import React from 'react'

type TopCoinCardProps = {
    name: string
    rank: number
    price: number
    marketCap: number
    symbol: string
    changes: number
}

const TopCoinCard = ({ name, rank, price, marketCap, symbol, changes }: TopCoinCardProps) => {
    return (
        <div className='w-full h-full flex flex-col gap-6 rounded-lg border border-purple-500 bg-gray-800 p-6 '>
            <div className='flex items-center justify-between'>
                <span className='text-lg font-semibold'>{name}</span>
                <span className='text-sm'>#{rank}</span>
            </div>
            <div className='flex justify-between'>
                <div className='flex flex-col w-fit'>
                    <span className='text-sm text-gray-400'>Price</span>
                    <span className='text-lg font-semibold'>${price}</span>
                </div>
                <div className='flex flex-col w-fit'>
                    <span className='text-sm text-gray-400'>Market Cap</span>
                    <span className='text-lg font-semibold'>${marketCap}</span>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <span className='text-gray-400'>{symbol}</span>
                <span className={`flex gap-1 ${changes > 0 ? "text-green-500" : "text-red-500"}`}>
                    {changes > 0 ? (
                        <TrendingUp />
                    ) : (
                        <TrendingDown />
                    )}


                    {changes}%
                </span>
            </div>
        </div>
    )
}

export default TopCoinCard