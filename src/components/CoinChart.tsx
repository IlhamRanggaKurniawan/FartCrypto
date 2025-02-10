"use client"

import React, { useEffect, useState } from 'react'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const formatData = (prices: number[][]) => {
    return prices.map(([timestamp, price]) => ({
        time: new Date(timestamp), // Format: DD/MM/YYYY
        price: price, // Format angka yang lebih rapi
    }));
};

const CoinChart = ({ coinId }: { coinId: string }) => {
    const [data, setData] = useState<{ time: Date; price: number }[]>([]);
    const [selectedRange, setSelectedRange] = useState("1")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${selectedRange}`, {
                    next: { revalidate: 30 },
                })
                const data = await res.json()
                const formattedData = formatData(data.prices);
                setData(formattedData)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [selectedRange, coinId]);

    const formatXAxis = (time: Date) => {
        if (selectedRange === "1") return time.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
        if (selectedRange === "7") return time.toLocaleDateString("id-ID", { day: "2-digit", month: "2-digit" });
        if (selectedRange === "30") return time.toLocaleDateString("id-ID", { day: "2-digit", month: "short" });
        if (selectedRange === "365") return time.toLocaleDateString("id-ID", { month: "short", year: "numeric" });
        return time.toLocaleDateString("id-ID");
    };

    return (
        <div className='w-full h-96 space-y-4'>
            <div className='flex justify-between px-4 '>
                <h2 className='text-xl font-bold'>Price Chart</h2>
                <div className="mb-4">
                    <select
                        className="p-2 bg-gray-800 text-white rounded cursor-pointer"
                        value={selectedRange}
                        onChange={(e) => setSelectedRange(e.target.value)}
                    >
                        <option value="1">1 Day</option>
                        <option value="7">1 Week</option>
                        <option value="30">1 Month</option>
                        <option value="365">1 Year</option>
                    </select>
                </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <XAxis
                        dataKey="time"
                        stroke="white"
                        tickFormatter={(time) => formatXAxis(new Date(time))}
                        interval="equidistantPreserveStart"
                    />
                    <YAxis domain={["auto", "auto"]} stroke="white" />
                    <Tooltip contentStyle={{ backgroundColor: "#333", color: "white", borderRadius: "10px" }} />
                    <Line
                        type="linear"
                        dataKey="price"
                        stroke="#B771E5"
                        strokeWidth={2}
                        dot={{ r: 0 }}
                        activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default CoinChart