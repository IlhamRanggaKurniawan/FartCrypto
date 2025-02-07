import React from 'react'

const Button = ({ children }: { children: React.ReactNode }) => {
    return (
        <button className='bg-pink-600 px-6 py-3 rounded-lg'>
            {children}
        </button>
    )
}

export default Button