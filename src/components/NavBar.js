import React from "react"
import { NavLink } from "react-router-dom"

function NavBar() {

    const styles = {
        display: "inline-block",
        width: "60px",
        padding: "20px",
        margin: "0 6px 6px",
        background: "cadetblue",
        textDecoration: "none",
        color: "white",
        radius: "10px",
        visited: "none",
      };

    return (
        <div className="nav-container">
            <NavLink
                to="/"
                exact
                className="nav"
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
                className="nav"
                style={styles}
                activeStyle={{
                  background: "lightblue",
                }}
            >
            Login
            </NavLink>
            <NavLink
                to="/NewApartmentForm"
                exact
                className="nav"
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