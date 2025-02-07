import React from 'react'
import AdvantageCard from './AdvantageCard'
import { BarChart3, PieChart, TrendingUp } from 'lucide-react'

const AdvantageSection = () => {
    const cardDatas = [
        {
            title: "Live Price Tracking",
            desc: "Real-time price updates for thousands of cryptocurrencies, refreshed every minute.",
            icon: TrendingUp
        },
        {
            title: "Historical Data",
            desc: "Access detailed historical data, including price, volume, and market cap, dating back to coin inception.",
            icon: BarChart3
        },
        {
            title: "Market Dominance",
            desc: "Visualize market share and dominance of top cryptocurrencies in easy-to-understand charts.",
            icon: PieChart
        }
    ]

    return (
        <div className='px-4 flex flex-col items-center gap-8 text-center py-16 bg-gray-900 md:py-28 md:gap-14 md:px-6'>
            <h3 className='w-full font-bold text-3xl md:text-4xl'>Comprehensive Crypto Data</h3>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
                {cardDatas.map((data) => (
                    <AdvantageCard icon={data.icon} desc={data.desc} title={data.title} key={data.title} />
                ))}
            </div>
        </div>
    )
}

export default AdvantageSection