import React from 'react'
import TopCoinCard from './TopCoinCard'

const TopCoinsSection = () => {
    const coinDatas = [
        {
            name: "Bitcoin",
            symbol: "BTC",
            marketCap: 950000000000,
            price: 45000.12,
            changes: 2.15
        },
        {
            name: "Ethereum",
            symbol: "ETH",
            marketCap: 450000000000,
            price: 3200.45,
            changes: -1.28
        },
        {
            name: "Binance Coin",
            symbol: "BNB",
            marketCap: 70000000000,
            price: 415.67,
            changes: 0.75
        },
        {
            name: "Solana",
            symbol: "SOL",
            marketCap: 50000000000,
            price: 115.34,
            changes: -3.02
        },
        {
            name: "Cardano",
            symbol: "ADA",
            marketCap: 35000000000,
            price: 1.23,
            changes: 1.88
        },
        {
            name: "XRP",
            symbol: "XRP",
            marketCap: 28000000000,
            price: 0.85,
            changes: -0.67
        }
    ];

    return (
        <div className='px-4 flex flex-col items-center gap-8 py-16 bg-gray-900 md:py-28 md:gap-14 md:px-6'>
            <h3 className='w-full font-bold text-3xl text-center md:text-4xl'>Top 6 by Market Cap</h3>
            <div className='grid grid-cols-1 gap-8 w-full md:grid-cols-2 xl:grid-cols-3'>
                {coinDatas.map((coin, index) => (
                    <TopCoinCard changes={coin.changes} marketCap={coin.marketCap} name={coin.name} price={coin.price} rank={index + 1} symbol={coin.symbol} key={coin.symbol} />
                ))}
            </div>
        </div>
    )
}

export default TopCoinsSection