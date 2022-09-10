import React, { useEffect, useState } from "react"
import {LoggedInContext} from "./UserContext"
import './App.css';
import NavBar from "./NavBar"
import Home from "./Home"
import Login from "./Login"
import Logout from "./Logout"
import ApartmentListings from "./ApartmentListings";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import NewApartmentForm from "./NewApartmentForm";
import Apartment from "./Apartment"

function App() {
  useEffect(() => {
    fetch("http://localhost:3000/listings")
    .then((r) => r.json())
    .then((data) => {
      setHomeData(data)
    })  
  },[])

  const [homeData, setHomeData] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  
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
            <Apartment data={homeData}/>
          </Route>
        </Switch>
      </LoggedInContext.Provider>
    </div>
  );
}


export default App;
