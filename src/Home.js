import React from "react";

function Home() {
    const homePhoto = "https://ar.rdcpix.com/f080e465c66bdddc91043312d9aba0b6c-f136476264od-w480_h360_x2.jpg"
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