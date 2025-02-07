import { LucideProps } from 'lucide-react'
import React from 'react'

const AdvantageCard = ({ icon : Icon, title, desc }: { icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>, title: string, desc: string }) => {
    return (
        <div className='w-full h-full flex flex-col items-center gap-4 rounded-lg border border-purple-500 bg-gray-800 p-6 text-center transition-all duration-300 hover:scale-105 md:px-3 lg:p-6'>
            <Icon className='w-12 h-12 text-pink-400'/>
            <h4 className='text-xl font-semibold xl:text-2xl'>{title}</h4>
            <p className='text-gray-300 xl:text-lg'>{desc}</p>
        </div>
    )
}

export default AdvantageCard