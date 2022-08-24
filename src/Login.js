import React, { useContext, useState } from "react";
import { LoggedInContext } from "./UserContext";

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {loggedIn, setLoggedIn} = useContext(LoggedInContext)

    function handleSubmit(e) {
        e.preventDefault()
        if(username && password) {const formData = {
            "username" : username, "password" : password}
            console.log(formData)
            setUsername("")
            setPassword("")
            setLoggedIn(!loggedIn)
        }
        else {
            alert("Please fill out both input fields!")
        }
    }

    function handleUserChange(e) {
        setUsername(e.target.value)
        console.log(username)
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    return (
        <>
           <h1 className="headers">Login</h1>
           <form className="login-page" >
                <label>Username: </label>
                <input type="text" onChange={handleUserChange} value={`${username}`} />
                <label>Password: </label>
                <input type="password" onChange={handlePasswordChange} value={`${password}`} />
                <input type="submit" value="Submit" onClick={handleSubmit}/>
           </form>
        </>
    )
}

export default Login