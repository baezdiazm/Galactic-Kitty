import React, { useEffect, useState } from "react"
//import { useContext } from 'react'
import {ApartmentProvider} from "./ApartmentsContext"
import './App.css';
import ApartmentListings from "./ApartmentListings"
import Home from "./Home"
import Login from "./Login"
 

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [homeData, setHomeData] = useState([])

  function handleLoggedIn() {
    setLoggedIn(() => !(loggedIn))
  }

  useEffect(() => {
    fetch("http://localhost:3000/listings")
    .then((r) => r.json())
    .then((data) => {
      setHomeData(data)
      //console.log(data)
    })  
  },[])
  //<ApartmentListings data={homeData}/>
  //<button onClick={handleLoggedIn}>{loggedIn? "Logout" : "Login"}</button>
  return (
    <div className="App">
      <ApartmentProvider>
        {loggedIn? <Home /> : <Login />}
        <hr/>
        
      </ApartmentProvider>
    </div>
    
  );
}

export default App;
