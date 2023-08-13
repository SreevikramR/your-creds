"use client"
import React, { useState } from 'react'
import Navigation from '@/components/Navigation/Navigation'
import PasswordButton from '@/components/Passwords/PasswordButton'
import NewPasswordButton from '@/components/Passwords/NewPasswordButton'
import PasswordModal from '@/components/PasswordModal/PasswordModal'
import NewPasswordModal from '@/components/PasswordModal/NewPasswordModal'

function page() {
    const [showModal, setShowModal] = useState(false)
    const [modalType, setModalType] = useState('')

    return (
        <Navigation>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/>
            {showModal && (modalType == 'password') && <PasswordModal setShowModal={setShowModal}/>}
            {showModal && (modalType == 'newPassword') && <NewPasswordModal setShowModal={setShowModal}/>}
            <div className='grid grid-cols-5 gap-4 grid-flow-row'>
                <NewPasswordButton setShowModal={setShowModal} setModalType={setModalType} />
                <PasswordButton setShowModal={setShowModal} setModalType={setModalType} />
                <PasswordButton setShowModal={setShowModal} setModalType={setModalType} />
                <PasswordButton setShowModal={setShowModal} setModalType={setModalType} />
                <PasswordButton setShowModal={setShowModal} setModalType={setModalType} />
                <PasswordButton setShowModal={setShowModal} setModalType={setModalType} />
                <PasswordButton setShowModal={setShowModal} setModalType={setModalType} />
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