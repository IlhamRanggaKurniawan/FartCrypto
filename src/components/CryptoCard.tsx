import { ArrowDown, ArrowUp } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type CryptoCardProps = {
    image: string,
    name: string,
    symbol: string,
    marketCap: number,
    price: number,
    changes: number,
}

const CryptoCard = ({ image, name, symbol, marketCap, price, changes }: CryptoCardProps) => {
    return (
        <div className='w-full h-full bg-[1A1A1D] rounded-lg overflow-hidden border border-pink-500'>
            <div className='flex items-center gap-6 p-4'>
                <Image src={image} alt={name} width={50} height={50} />
                <div>
                    <h4 className=''>{name} ({symbol.toUpperCase()})</h4>
                    <span className='font-medium text-lg'>${price.toLocaleString()}</span>
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
        </div >
    )
}

export default CryptoCard