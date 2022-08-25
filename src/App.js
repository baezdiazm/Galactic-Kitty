import React, { useEffect, useState } from "react"
import {LoggedInContext} from "./UserContext"
import './App.css';
import NavBar from "./NavBar"
import Home from "./Home"
import Login from "./Login"
import ApartmentListings from "./ApartmentListings";
import { Route, Switch } from "react-router-dom";
import NewApartmentForm from "./NewApartmentForm";

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

  return (
    <div className="App">
      <LoggedInContext.Provider value={{loggedIn, setLoggedIn, homeData, setHomeData}}>
        <NavBar />
        <Switch>
          <Route path="/login">
                <Login />
          </Route>
          <Route path="/NewApartmentForm">
                <NewApartmentForm />
          </Route>
          <Route exact path="/">
              <Home />
              {loggedIn? <ApartmentListings data={homeData}/> : "" }
          </Route>
        </Switch>
      </LoggedInContext.Provider>
    </div>
  );
}


export default App;
