import React from "react"

function ApartmentCard({unit}) {
    //

    return (
        <div className="container">
            <div className="card">
                <img src={unit.image} alt={unit.name} className={"thumbnails"}/>
                <a href="#" className="names">{unit.name}</a>
            </div>
        </div>
    )
}

export default ApartmentCard