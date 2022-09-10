import React, { useContext } from "react";
import { LoggedInContext } from "../UserContext";

function Home() {
    const {loggedIn, setLoggedIn} = useContext(LoggedInContext)
    const homePhoto = "https://goldfarbproperties.com/media_cache/userFiles/uploads/Building_Pictures/GRC/carousel-slide/1770.jpg"
    
    return (
        <div className="home-container">
            <header className="home-header">
                <h1 className="headers">Your New Home</h1>
                <img src={homePhoto} alt={homePhoto} className="home-img"/>
            </header>
            {
                !loggedIn? <button className={"Logout"} onClick={setLoggedIn(false)}>Login</button> : ""
            }
        </div>
    )
}

export default Home