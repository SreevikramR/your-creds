"use client"
import React from 'react'

const Navigation = ({ children }) => {
    return (
        <div className='flex flex-row'>
            <div style={styles.container}>
                    <h1 className='font-semibold text-3xl'>Your Creds</h1>
            </div>
            <div className='flex flex-col w-full'>
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
        backgroundColor: '#09090b',
        padding: '1rem',
        height: '100vh',
        width: '15%',
        position: 'sticky',
        top: '0',
    },
    topNav: {
        display: 'flex',
        backgroundColor: '#09090b',
        borderLeft: '1px solid #27272a',
        borderBottom: '1px solid #27272a',
        height: '64px',
        padding: '1rem',
        width: '100%',
        position: 'sticky',
        top: '0',
    },
}