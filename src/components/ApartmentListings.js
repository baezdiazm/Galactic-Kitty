import React from "react";
import ApartmentCard from "./ApartmentCard"

function ApartmentListings({data}) {

    
    const allAps = data.map((unit) => {
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