import React from "react"
import { NavLink, Link } from "react-router-dom"

function NavBar() {

    const styles = {
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "cadetblue",
        textDecoration: "none",
        color: "white",
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
                to="/login"
                exact
                style={styles}
                activeStyle={{
                  background: "lightblue",
                }}
            >
            Login
            </NavLink>
        </div>
    )
}
export default NavBar