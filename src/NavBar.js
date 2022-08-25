import React from "react"
import { NavLink, Link } from "react-router-dom"
import { useContext } from "react";
import { LoggedInContext } from "./UserContext";

function NavBar() {
    const context = useContext(LoggedInContext)
    const logged = context.loggedIn? "" : "login"

    const styles = {
        display: "inline-block",
        width: "60px",
        padding: "20px",
        margin: "0 6px 6px",
        background: "cadetblue",
        textDecoration: "none",
        color: "white",
        radius: "10px",
      };

    return (
        <div className="nav">
            <NavLink
                to="/"
                exact
                style={styles}
                activeStyle={{
                    background: "lightblue",
                }}
            >
            Home
            </NavLink>
            <NavLink
                to={`/login`}
                exact
                style={styles}
                activeStyle={{
                  background: "lightblue",
                }}
            >
            Log{context.loggedIn? "out" : "in"}
            </NavLink>
            <NavLink
                to="/NewApartmentForm"
                exact
                style={styles}
                activeStyle={{
                  background: "lightblue",
                }}
            >
            New Apartment
            </NavLink>
        </div>
    )
}
export default NavBar