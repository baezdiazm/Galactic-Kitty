import React from "react"

function ApartmentCard({unit}) {
    //

    //<a href="#" className="names">{unit.name}</a>
    return (
        <div className="container">
            <div className="card">
                <img src={unit.image} alt={unit.name} className={"thumbnails"}/>
                <h3>{unit.name}</h3>
                <p className="address">{unit.address}</p>
            </div>
        </div>
    )
}

export default ApartmentCard