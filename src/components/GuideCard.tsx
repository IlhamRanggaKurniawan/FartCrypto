import React from 'react'

const GuideCard = ({number, title, desc} : {number: number, title: string, desc: string}) => {
    return (
        <div className='w-full h-full flex flex-col items-center gap-4 rounded-lg border border-pink-500 bg-gray-900 p-6 text-center transition-all duration-300 hover:scale-105 md:px-3 lg:p-6'>
            <p className='text-pink-400 font-bold text-3xl'>{number}</p>
            <h4 className='text-xl font-semibold xl:text-2xl'>{title}</h4>
            <p className='text-gray-300 xl:text-lg'>{desc}</p>
        </div>
    )
}

export default GuideCard