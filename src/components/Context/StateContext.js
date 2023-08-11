"use client"

import React, { useContext, createContext, forwardRef, useState } from "react"

const StateContext = createContext()

export const useStateContext = () => useContext(StateContext)

const StateProvider = ({ children }) => {
    const [search, setSearch] = useState("")

    const value = {
        search,
        setSearch
    }

    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    )
}

const ContextWrapper = ({ children }) => {
    return (
        <StateProvider>
            {children}
        </StateProvider>
    )
}

export default ContextWrapper