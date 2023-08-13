"use client"
import React, { useState } from 'react'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword, browserSessionPersistence, setPersistence } from 'firebase/auth'
import { useRouter } from 'next/navigation'

export default function Home() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const router = useRouter()

    const handleLogin = async (e) => {
        let button = document.getElementById('button')
        document.getElementById("errorBox").style.display = "none";
        button.disabled = true
        try {
            e.preventDefault();
            await setPersistence(auth, browserSessionPersistence).then(() =>
                signInWithEmailAndPassword(auth, email, password)
            );
            router.push('/dashboard')
        } catch (error) {
            document.getElementById("errorBox").style.display = "flex";
            switch (error.code) {
                case "auth/user-not-found":
                    setErrorMessage("No account found with this email");
                    break;
                case "auth/internal-error":
                    setErrorMessage("Server Error: Please try again later");
                    break;
                case "auth/invalid-email":
                    setErrorMessage("Please enter a valid email");
                    break;
                case "auth/invalid-password":
                    setErrorMessage("Please enter a valid password");
                    break;
                case "auth/wrong-password":
                    setErrorMessage("Username/password is incorrect");
                    break;
                case "auth/too-many-requests":
                    setErrorMessage("Too many attemps, please try again later");
                    break;
                case "auth/missing-password":
                    setErrorMessage("Please enter a password");
                    break;
                default:
                    setErrorMessage("Code: " + error.code);
                    break;
            }
            console.log(error.message);
            button.disabled = false
        }
    };
            
	return (
        <main className='h-screen'>
            <div className='flex flex-col flex-wrap justify-end items-center h-2/5'>
                <div className='w-72'>
                    <div id='errorBox' className="place-content-center w-full p-3 bg-red-600 mb-4 text-xl border-2 border-red-600 rounded-md hidden">
                        <span className="text-white text-center">{errorMessage}</span>
                    </div>
                </div>
                <text className='mb-8 font-bold text-3xl text-black'>Your Creds</text>
            </div>
            <div className="flex-col flex-wrap items-center flex h-3/5">
                <div className="w-72">
                    <div className="relative h-10 w-full min-w-[200px]">
                        <input
                            className="peer h-full w-full rounded-[7px] border border-black border-t-black bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-black placeholder-shown:border-t-black focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-black"
                            placeholder=" "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-black">
                        Email
                        </label>
                    </div>
                </div>
                <div className="w-72 mt-4">
                    <div className="relative h-10 w-full min-w-[200px]">
                        <input
                            className="peer h-full w-full rounded-[7px] border border-black border-t-black bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-black placeholder-shown:border-t-black focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-black"
                            placeholder=" "
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type='password'
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-back">
                        Password
                        </label>
                    </div>
                </div>
                <button id='button' className='w-72 bg-white rounded-lg m-8 text-black font-semibold text-lg p-2 disabled:bg-gray-400' onClick={handleLogin}>
                    Login
                </button>
            </div>
        </main>
	)
}