import CoinChart from '@/components/CoinChart'
import CoinInformation from '@/components/CoinInformation'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = ({ params }: { params: { coin: string } }) => {

    return (
        <>
            <Navbar />
            <div className='py-20 px-4 space-y-10 overflow-hidden'>
                <CoinInformation coinId={params.coin} />
                <CoinChart coinId={params.coin}/>
            </div>
        </>
    )
}

export default page