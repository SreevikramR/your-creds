"use client"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useStateContext } from '../Context/StateContext'

const Navigation = ({ children }) => {
    const { setSearch } = useStateContext()

    return (
        <div className='flex flex-row'>
            <div style={styles.container}>
                <div className='flex flex-col text-white w-full'>
                    <span className='font-semibold text-3xl text-center'>Your Creds</span>
                    <button className='mt-6 text-lg p-2 pl-4 text-left rounded-xl hover:bg-blue-300 hover:text-black'><FontAwesomeIcon icon={faLock} />&ensp; Passwords</button>
                </div>
            </div>
            <div className='flex flex-col w-full text-black'>
                <div style={styles.topNav}>
                    <FontAwesomeIcon icon={faSearch} className='text-2xl pt-1 pr-2 text-black' />
                    <input className='w-1/4 p-2 pl-4 rounded-xl border-2 border-black active:border-blue-600' type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className='p-4 h-full'>
                    {children}
                </div>
                <footer className='static border-t-2 border-black text-center'>
                    <a href="https://clearbit.com" className='text-xs'>Logos provided by Clearbit</a><a href='https://github.com/SreevikramR' className='text-xs font-semibold'> &#x2022; Developed by Sreevikram R</a>
                </footer>
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
        flexDirection: 'row',
        verticalAlign: 'middle',
        height: '64px',
        padding: '1rem',
        width: '100%',
        position: 'sticky',
        top: '0',
    }
}