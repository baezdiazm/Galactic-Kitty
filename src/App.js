import React, { useEffect, useState } from "react"
import {LoggedInContext} from "./UserContext"
import './App.css';
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Login from "./components/Login"
import Logout from "./components/Logout"
import ApartmentListings from "./components/ApartmentListings";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import NewApartmentForm from "./components/NewApartmentForm";
import Apartment from "./components/Apartment"

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
            <button onClick={handleLoggout}>Logout</button>
            {loggedIn? <ApartmentListings data={homeData}/> : <Redirect to={"/login"}/> }
          </Route>
          <Route to={"/Apartment"}>
            {loggedIn? <Apartment data={homeData}/> : <Redirect to={"/Login"} />}
          </Route>
        </Switch>
      </LoggedInContext.Provider>
    </div>
  );
}


export default App;
