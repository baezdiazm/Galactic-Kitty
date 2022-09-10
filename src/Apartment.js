import React from "react"
import { useHistory, useRouteMatch, useLocation } from "react-router-dom"

function Apartment({data}) {
    const history = useHistory()
    const match = useRouteMatch()
    const location = useLocation().pathname.split("")[11]-1

    function back() {
        history.push("/")
    }
    
    console.log(data[location].image)
    return (
        <div>
            <button onClick={back}>Back</button>
            <h1 className="listing-name">{data[location].name}</h1>
            <img className="listing-image"src={data[location].image}/>
            <h3>Some description will be here soon...</h3>
        </div>
    )
}

export default Apartment