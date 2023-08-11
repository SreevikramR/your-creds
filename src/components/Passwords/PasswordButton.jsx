"use client"
import React from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

const PasswordButton = ({ url, service, username }) => {
    return (
        <div className='h-44 bg-white p-4 rounded-2xl shadow-cs1 hover:shadow-cs2 hover:cursor-pointer flex flex-col items-center justify-center'>
            <Image src={'https://logo.clearbit.com/microsoft.com?size=80'} width={80} height={80}/>
            <span className='font-semibold pt-1 text-lg'>Password</span>
            <span className='text-xs'>email@gmail.com</span>
        </div>
    )
}

export default PasswordButton