import { ArrowDown, ArrowUp } from "lucide-react";
import React from "react";

const MarketTicker = () => {
    const datas = [
        { name: "Bitcoin", symbol: "BTC", price: 67123, changes: -2.35 },
        { name: "Ethereum", symbol: "ETH", price: 3795, changes: 1.52 },
        { name: "Binance Coin", symbol: "BNB", price: 412, changes: -0.85 },
        { name: "Solana", symbol: "SOL", price: 128, changes: 3.27 },
        { name: "Ripple", symbol: "XRP", price: 0.56, changes: -1.12 },
        { name: "Cardano", symbol: "ADA", price: 0.48, changes: 2.64 },
        { name: "Polkadot", symbol: "DOT", price: 7.89, changes: 0.88 },
        { name: "Dogecoin", symbol: "DOGE", price: 0.09, changes: -1.74 },
        { name: "Avalanche", symbol: "AVAX", price: 24.67, changes: 4.12 },
    ];

    return (
        <div className='bg-gray-900 border-y border-purple-600 w-full h-16 flex overflow-hidden'>
            <div className="flex min-w-max animate-marquee whitespace-nowrap">
                {[...datas, ...datas].map((data, index) => (
                    <div key={index} className="flex h-full items-center justify-between px-6 space-x-4">
                        <span className="text-pink-400 font-semibold">{data.symbol}</span>
                        <span className="text-white">${data.price.toLocaleString()}</span>
                        <span className={`flex items-center gap-1 ${data.changes > 0 ? "text-green-500" : "text-red-500"}`}>
                            {data.changes > 0 ? <ArrowUp /> : <ArrowDown />}
                            {Math.abs(data.changes)}%
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MarketTicker