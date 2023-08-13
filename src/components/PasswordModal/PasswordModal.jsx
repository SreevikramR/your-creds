"use client"
import React from 'react'

const PasswordModal = ({ setShowModal }) => {
    return (
        <>
            <div style={styles.backdrop} onClick={() => setShowModal(false)}/>
            <div style={styles.modal} onClick={() => console.log("modal click")}>
                <h1>Modal</h1>
            </div>
        </>
    )
}

export default PasswordModal

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
        backgroundColor: 'white',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '50vw',
        height: '75vh',
        zIndex: '101',
        borderRadius: '1.5rem',
        padding: '1rem',
    }
}