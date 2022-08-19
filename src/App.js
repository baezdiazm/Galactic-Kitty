import React, { useEffect, useState } from "react"
//import { useContext } from 'react'
import {ApartmentProvider} from "./Apartments"
import './App.css';
import ApartmentListings from "./ApartmentListings"
import Home from "./Home"
 

function App() {
  
  const [homeData, setHomeData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/listings")
    .then((r) => r.json())
    .then((data) => {
      setHomeData(data)
      //console.log(data)
    })  
  },[])
  //
  return (
    <div className="App">
      <ApartmentProvider>
        <Home />
        <hr/>
        <ApartmentListings data={homeData}/>
      </ApartmentProvider>
    </div>
    
  );
}

export default App;
