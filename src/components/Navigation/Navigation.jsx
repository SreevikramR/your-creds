"use client"
import React from 'react'

const Navigation = ({ children }) => {
    return (
        <div className='flex flex-row'>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/>
            <div style={styles.container}>
                <div className='flex flex-col text-white w-full'>
                    <h1 className='font-semibold text-3xl'>Your Creds</h1>
                    <button className='mt-6 text-lg p-2 pl-4 text-left rounded-xl hover:bg-zinc-800'><i className="fa fa-lock"/>&ensp; Passwords</button>
                </div>
            </div>
            <div className='flex flex-col w-full text-black'>
                <div style={styles.topNav}>
                    <h1>Top Nav</h1>
                </div>
                <div className='p-4'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Navigation

const styles = {
    container: {
        display: 'flex',
        backgroundColor: '#2563eb',
        padding: '1rem',
        height: '100vh',
        width: '15%',
        position: 'sticky',
        top: '0',
    },
    topNav: {
        display: 'flex',
        backgroundColor: '#eff6ff',
        height: '64px',
        padding: '1rem',
        width: '100%',
        position: 'sticky',
        top: '0',
    }
}