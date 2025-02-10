import CoinChart from '@/components/CoinChart'
import CoinInformation from '@/components/CoinInformation'
import React from 'react'

const page = async ({ params }: { params: Promise<{ coin: string }> }) => {

    return (
        <>
            <div className='py-20 px-4 space-y-10 overflow-hidden'>
                <CoinInformation coinId={(await params).coin} />
                <CoinChart coinId={(await params).coin} />
            </div>
        </>
    )
}

export default page