import React, { useContext } from "react";
import ApartmentCard from "./ApartmentCard"
import { LoggedInContext } from "../UserContext";

function ApartmentListings() {
    
    const context = useContext(LoggedInContext)
    
    const allAps = context.homeData.map((unit) => {
    return (
            <div className="listing" key={unit.id}>
                <ApartmentCard unit={unit}/>
            </div>
        )
    })
    
    return (
        <div className="grid">
            <h1>Available units</h1>
            {allAps}
        </div>
    )
}

export default ApartmentListings