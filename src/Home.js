import React, { useContext } from "react";
//import ApartmentListings from "./ApartmentListings";
import { LoggedInContext } from "./UserContext";

function Home() {
    const {loggedIn, setLoggedIn} = useContext(LoggedInContext)
    const homePhoto = "https://goldfarbproperties.com/media_cache/userFiles/uploads/Building_Pictures/GRC/carousel-slide/1770.jpg"
    //<ApartmentListings />
    
    function loggout() {
        setLoggedIn(!loggedIn)

    }
    return (
        <div className="home-container">
            <header className="home-header">
                <h1 className="headers">Your New Home</h1>
                <img src={homePhoto} alt={homePhoto} className="home-img"/>
            </header>
            <button className={"Logout"} onClick={loggout}>Log{loggedIn? "out" : "in"}</button>
            {console.log(loggedIn)}
        </div>
    )
}

export default Home