"use client"
import React from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NewPasswordButton = () => {
    return (
        <div className='h-44 bg-white p-4 rounded-2xl shadow-cs1 hover:shadow-cs2 hover:cursor-pointer flex flex-col items-center justify-center'>
            <span className='text-7xl'><FontAwesomeIcon icon={faPlus} /></span><span className='font-semibold pt-2 text-lg'>Add New</span>
        </div>
    )
}

export default NewPasswordButton