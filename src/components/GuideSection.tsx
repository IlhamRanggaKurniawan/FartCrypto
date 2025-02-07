import React from 'react'
import GuideCard from './GuideCard'

const GuideSection = () => {
    const guideDatas = [
        {
            title: "Browse Coins",
            desc: "Explore our comprehensive list of cryptocurrencies, sortable by rank, price, or 24h change."
        },
        {
            title: "Select a Coin",
            desc: "Click on any coin to view detailed information, including price charts, market data, and key statistics."
        },
        {
            title: "Analyze Data",
            desc: "Use our interactive charts and tools to analyze historical trends, compare coins, and gain insights."
        },
    ]

    return (
        <div className='px-4 flex flex-col items-center gap-8 text-center py-16 md:py-28 md:gap-14 md:px-6'>
            <h3 className='w-full font-bold text-3xl md:text-4xl'>How It Works</h3>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
                {guideDatas.map((data, index) => (
                    <GuideCard number={index + 1} title={data.title} desc={data.desc} key={data.title} />
                ))}
            </div>
        </div>
    )
}

export default GuideSection