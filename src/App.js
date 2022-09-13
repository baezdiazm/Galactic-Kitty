import React, { useEffect, useState } from "react"
import {LoggedInContext} from "./UserContext"
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

import './App.css';
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Login from "./components/Login"
import Logout from "./components/Logout"
import Apartment from "./components/Apartment"
import ApartmentListings from "./components/ApartmentListings";
import NewApartmentForm from "./components/NewApartmentForm";

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
  
  const history = useHistory()

  function handleLoggout() {
    setLoggedIn(false)
  }

  //function top() {
  //  document.documentElement.scrollTop = 0
  //}

  return (
    <div className="App">
      <LoggedInContext.Provider value={{loggedIn, setLoggedIn, homeData, setHomeData, history}}>
        <NavBar />
        <Switch>
          <Route path="/login">
            {loggedIn? <Logout /> : <Login />}
          </Route>
          <Route path="/NewApartmentForm">
            {loggedIn? <NewApartmentForm /> : <Redirect to={"/login"} />}
          </Route>
          <Route exact path="/">
            <Home />
            {console.log("Home data: ",homeData)}
            <button onClick={handleLoggout}>Logout</button>
            {loggedIn? <ApartmentListings /> : <Redirect to={"/login"}/> }
          </Route>
          <Route to={"/Apartment"}>
            {loggedIn? <Apartment /> : <Redirect to={"/Login"} />}
          </Route>
        </Switch>
      </LoggedInContext.Provider>
    </div>
  );
}


export default App;
