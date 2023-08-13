"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import padlock from '../../../public/padlock.png'

const PasswordButton = ({ url, service, username, setShowModal, setModalType }) => {
    const [imgURL, setImgURL] = useState('https://logo.clearbit.com/microsoft.com?size=80')

    const handleClick = () => {
        setModalType('password')
        setShowModal(true)
    }

    return (
        <div className='h-44 bg-white p-4 rounded-2xl shadow-cs1 hover:shadow-cs2 hover:cursor-pointer flex flex-col items-center justify-center' onClick={handleClick}>
            <Image src={imgURL} onError={() => setImgURL(padlock)} alt='' width={80} height={80}/>
            <span className='font-semibold pt-1 text-lg'>Password</span>
            <span className='text-xs'>email@gmail.com</span>
        </div>
    )
}

export default PasswordButton