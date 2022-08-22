import React from "react";
import ApartmentListings from "./ApartmentListings";

function Home() {
    const homePhoto = "https://goldfarbproperties.com/media_cache/userFiles/uploads/Building_Pictures/GRC/carousel-slide/1770.jpg"
    //<ApartmentListings />
    return (
        <>
            <header className="home">
                <h1 className="header">Your New Home</h1>
                <img src={homePhoto} alt={homePhoto} className="home-img"/>
            </header>
        </>
    )
}

export default Home