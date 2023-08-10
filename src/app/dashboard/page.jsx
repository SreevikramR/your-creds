"use client"
import React from 'react'
import Navigation from '@/components/Navigation/Navigation'

function page() {
    return (
        <Navigation>
            <div className='grid grid-cols-5 gap-4 grid-flow-row'>
                <div className='h-40 bg-white p-4 rounded-2xl shadow-cs1 hover:shadow-cs2 hover:cursor-pointer'>Element</div>
                <div className='h-40 bg-white p-4 rounded-2xl shadow-cs1 hover:shadow-cs2 hover:cursor-pointer'>Element</div>
                <div className='h-40 bg-white p-4 rounded-2xl shadow-cs1 hover:shadow-cs2 hover:cursor-pointer'>Element</div>
                <div className='h-40 bg-white p-4 rounded-2xl shadow-cs1 hover:shadow-cs2 hover:cursor-pointer'>Element</div>
                <div className='h-40 bg-white p-4 rounded-2xl shadow-cs1 hover:shadow-cs2 hover:cursor-pointer'>Element</div>
                <div className='h-40 bg-white p-4 rounded-2xl shadow-cs1 hover:shadow-cs2 hover:cursor-pointer'>Element</div>
            </div>
        </Navigation>
    )
}

export default page

const styles = {
    button: {
        backgroundColor: 'white',
        padding: '1rem',
        borderRadius: '1rem',
        boxShadow: '0 0 10px 5px rgba(0,0,0,0.1)',
    },
}