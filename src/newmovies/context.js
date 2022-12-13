import React, { useContext } from 'react'
import { moviesData } from './moviesApi'
const AppContext = React.createContext()

const AppProvider = ({children}) =>{
    return <AppContext.Provider value={moviesData}>
        {children}
    </AppContext.Provider>
}

// global custom hooks

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext}