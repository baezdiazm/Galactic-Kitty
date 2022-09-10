import React from "react"
import { NavLink } from "react-router-dom"

function NavBar() {
//    const context = useContext(LoggedInContext)

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
            Login
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