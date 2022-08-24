import React, { useEffect, useState } from "react"
import {LoggedInContext} from "./UserContext"
import './App.css';
//import ApartmentListings from "./ApartmentListings"
import NavBar from "./NavBar"
import Home from "./Home"
import Login from "./Login"
import ApartmentListings from "./ApartmentListings";
import { Route, Switch } from "react-router-dom";

function App() {
  useEffect(() => {
    fetch("http://localhost:3000/listings")
    .then((r) => r.json())
    .then((data) => {
      setHomeData(data)
    })  
  },[])
  const [homeData, setHomeData] = useState([])

  const [loggedIn, setLoggedIn] = useState(true)
  
  //<ApartmentListings data={homeData}/>
  return (
    <div className="App">
      <LoggedInContext.Provider value={{loggedIn, setLoggedIn}}>
        <NavBar />
        <Switch>
          <Route path="/login">
                <Login />
          </Route>
          <Route exact path="/">
                <Home />
          </Route>
        </Switch>
      </LoggedInContext.Provider>
    </div>
  );
}


export default App;
