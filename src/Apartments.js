import React from 'react'

const ApartmentContext = React.createContext()

function ApartmentProvider({ children }) {
    return <ApartmentContext.Provider value={null}> {children} </ApartmentContext.Provider>
}
export { ApartmentContext, ApartmentProvider }