import React from "react"
import { useHistory, useLocation } from "react-router-dom"

function Apartment({data}) {
    const history = useHistory()
    const location = useLocation().pathname.split("")[11]-1

    function back() {
        history.push("/")
    }
    
    console.log(data)
    return (
        <div>
            <button onClick={back}>Back</button>
            <h1 className="listing-name">{data[location].name}</h1>
            <h2 className="listing-address">{data[location].address}</h2>
            <img className="listing-image"src={data[location].image} alt={data[location.name]}/>
            <h1 className="description-h1">Description</h1>
            <h3 className="description">{data[location].description}</h3>
        </div>
    )
}

export default Apartment