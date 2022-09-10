import React from "react"
import { useHistory, useRouteMatch, useLocation } from "react-router-dom"

function Apartment({data}) {
    const history = useHistory()
    const index = useLocation().pathname.split("")[11]-1

    function back() {
        history.push("/")
    }
    
    console.log(index)
    return (
        <div>
            <button onClick={back}>Back</button>
        </div>
    )
}

export default Apartment