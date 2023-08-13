"use client"
import React, { useState } from 'react'
import generatePassword from '../scripts/generatePassword'

const NewPasswordModal = ({ setShowModal }) => {
    const [name, setName] = useState('')
    const [url, setUrl] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showOptions, setShowOptions] = useState(false)
    const [length, setLength] = useState(16)
    const [notes, setNotes] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const generate = async () => {
        document.getElementById('generate').disabled = true
        let pwd = await generatePassword(16)
        console.log(pwd)
        setPassword(pwd)
        document.getElementById('generate').disabled = false
        setShowPassword(true)
    }
    
    return (
        <>
            <div style={styles.backdrop} onClick={() => setShowModal(false)}/>
            <div style={styles.modal} onClick={() => console.log("modal click")}>
                <div className='bg-blue-600 w-full pr-3 rounded-t-2xl pl-6 flex justify-between content-center flex-wrap text-white text-4xl font-semibold flex-row'><span className='my-6'>Add New Password</span><span className='flex justify-end text-black cursor-pointer h-fit' onClick={() => setShowModal(false)}>&times;</span></div>
                <div className='px-6 py-3'>
                    <div className='flex flex-row mb-1 mt-1'>
                        <div style={styles.halfInput}>
                            <span className='ml-1 text-lg font-semibold'>Site Name</span>
                            <input className='w-full mb-2 p-2 rounded-md border-2 border-blue-600' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div style={styles.halfInputLast}>
                            <span className='ml-1 text-lg font-semibold'>Username</span>
                            <input className='w-full mb-2 p-2 rounded-md border-2 border-blue-600' type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                    </div>
                    
                    <span className='ml-1 text-lg font-semibold'>URL</span>
                    <input className='w-full mb-3 p-2 rounded-md border-2 border-blue-600' type='text' placeholder='URL' value={url} onChange={(e) => setUrl(e.target.value)} />
                    
                    <span className='ml-1 text-lg font-semibold'>Password</span>

                    <div className='flex flex-row'>
                        <div style={styles.passwordInput}>
                            <input className='w-full mb-2 p-2 rounded-md border-2 border-blue-600' type={showPassword ? 'text' : 'password'} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div style={styles.generateButton}>
                            <button id='generate' className='w-full mb-2 p-2 rounded-md border-2 font-semibold hover:bg-white border-blue-600 disabled:bg-gray-300' onClick={generate}>Generate Password</button>
                        </div>
                        <div style={styles.options}>
                            <button className='w-full mb-2 p-2 rounded-md border-2 font-semibold hover:bg-white border-blue-600' onClick={() => setShowOptions(!showOptions)}>Options</button>
                        </div>
                    </div>

                    {showOptions && (
                        <div className='border-2 border-black rounded-md p-2'>
                            <span className='ml-1 text-lg font-semibold'>Length</span>
                            <div className='flex flex-row'>
                                <div style={styles.slider}>
                                    <input className='w-full self-center p-2 rounded-md border-2 border-blue-600' type='range' min='8' max='64' value={length} onChange={(e) => setLength(e.target.value)} />
                                </div>
                                <div style={styles.numberInput}>
                                    <input className='w-full p-2 rounded-md border-2 border-blue-600' type='number' min='8' max='64' value={length} onChange={(e) => setLength(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    )}

                    <span className='ml-1 text-lg font-semibold'>Notes</span>
                    <textarea rows={5} className='w-full mb-2 p-2 rounded-md border-2 border-blue-600' type='text' placeholder='Notes' value={notes} onChange={(e) => setNotes(e.target.value)} />
                
                    <div className='flex flex-row justify-end'>
                        <button className='w-1/4 mb-2 mr-4 p-2 rounded-md border-2 font-semibold hover:bg-white border-blue-600' onClick={() => setShowModal(false)}>Cancel</button>
                        <button className='w-1/4 mb-2 p-2 rounded-md border-2 font-semibold hover:bg-white hover:text-black bg-blue-600 text-white border-blue-600'>Save</button>
                        </div>
                </div>
            </div>
        </>
    )
}

export default NewPasswordModal

const styles = {
    backdrop: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        zIndex: '100',
    },
    modal: {
        backgroundColor: '#bae6fd',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '50vw',
        height: '85vh',
        zIndex: '101',
        borderRadius: '1rem',
    },
    halfInput: {
        display: 'inline-block',
        width: 'calc(50% - 0.5rem)',
        marginRight: '1rem',
    },
    halfInputLast: {
        display: 'inline-block',
        width: 'calc(50% - 0.5rem)',
    },
    passwordInput: {
        display: 'inline-block',
        width: 'calc(50% - 0.5rem)',
        marginRight: '1rem',
    },
    generateButton: {
        display: 'inline-block',
        width: 'calc(25% - 1rem)',
        marginRight: '1rem',
    },
    options: {
        display: 'inline-block',
        width: 'calc(25% - 0.5rem)',
    },
    slider: {
        display: 'inline-block',
        width: 'calc(90% - 1rem)',
        marginRight: '1rem',
        display: 'flex',
    },
    numberInput: {
        display: 'inline-block',
        width: '10%'
    },
    submit: {
        width: 'calc(50% - 0.5rem)',
        marginRight: '1rem',
    },
}