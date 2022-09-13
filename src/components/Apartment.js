import React, { useContext } from "react"
import { useHistory, useLocation } from "react-router-dom"
import { LoggedInContext } from "../UserContext"

function Apartment() {
    const history = useHistory()
    const arrSize = useLocation().pathname.split('').length -1
    const index = useLocation().pathname.split("")[arrSize]-1

    const context = useContext(LoggedInContext)

    function back() {
        history.push("/")
    }
    
    console.log(context.homeData)
    return (
        <div>
            <button onClick={back}>Back</button>
            <h1 className="listing-name">{context.homeData[index].name}</h1>
            <h2 className="listing-address">{context.homeData[index].address}</h2>
            <img className="listing-image"src={context.homeData[index].image} alt={context.homeData[index.name]}/>
            <h1 className="description-h1">Description</h1>
            <h3 className="description">{context.homeData[index].description}</h3>
        </div>
    )
}

export default Apartment