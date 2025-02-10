import { ArrowDown, ArrowUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CryptoCardProps = {
    coinId: string,
    image: string,
    name: string,
    symbol: string,
    marketCap: number,
    price: number,
    changes: number,
}

const CryptoCard = ({coinId, image, name, symbol, marketCap, price, changes }: CryptoCardProps) => {
    return (
        <Link href={`/market/${coinId}`} className='w-full h-full bg-[1A1A1D] rounded-lg overflow-hidden border border-pink-500'>
            <div className='flex items-center gap-6 p-4'>
                <Image src={image} alt={name} width={50} height={50} />
                <div>
                    <h4 className=''>{name} ({symbol.toUpperCase()})</h4>
                    <span className='font-medium text-lg'>${price.toLocaleString(undefined, { maximumFractionDigits: 20 })}</span>
                </div>
            </div>
            <div className='p-4'>
                <div>
                    <span className='font-bold'>Market Cap: </span>
                    <span className=''>${marketCap.toLocaleString()}</span>
                </div>
                <div className='flex gap-1'>
                    <span className='font-bold'>24h Change: </span>
                    <span className={`flex ${changes > 0 ? "text-green-500" : "text-red-500"}`}>
                        {changes > 0 ? <ArrowUp /> : <ArrowDown />}

                        {Math.abs(changes).toFixed(2)}%
                    </span>
                </div>
            </div>
        </ Link>
    )
}

export default CryptoCard