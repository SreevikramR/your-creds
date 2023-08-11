"use client"
import React from 'react'
import Navigation from '@/components/Navigation/Navigation'
import PasswordButton from '@/components/Passwords/PasswordButton'
import NewPasswordButton from '@/components/Passwords/NewPasswordButton'

function page() {
    return (
        <Navigation>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/>
            <div className='grid grid-cols-5 gap-4 grid-flow-row'>
                <NewPasswordButton />
                <PasswordButton />
                <PasswordButton />
                <PasswordButton />
                <PasswordButton />
                <PasswordButton />
                <PasswordButton />
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