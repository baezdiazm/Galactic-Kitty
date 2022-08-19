import React from "react";
import ApartmentCard from "./ApartmentCard"

function ApartmentListings({data}) {
    const allAps = data.map((unit) => {
        return (
            <ApartmentCard key={unit.name} unit={unit}/>
        )
    })
    
    return (
        <div>
            {allAps}
        </div>
    )
}

export default ApartmentListings