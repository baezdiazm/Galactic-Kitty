import userEvent from "@testing-library/user-event"
import React from "react"
import { Link, useRouteMatch } from "react-router-dom"

function ApartmentCard({unit}) {
    const match = useRouteMatch()
    return (
        <Link to={`/Apartment/${unit.id}`}>
            <div className="container">
                <div className="card">
                    <img src={unit.image} alt={unit.name} className={"thumbnails"}/>
                    <h3>{unit.name}</h3>
                    <p className="address">{unit.address}</p>
                </div>
            </div>
        </Link>
    )
}

export default ApartmentCard