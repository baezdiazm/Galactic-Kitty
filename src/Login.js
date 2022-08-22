import React, { useState } from "react";

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if(username && password) {const formData = {
            "username" : username, "password" : password}
            console.log(formData)
            setUsername("")
            setPassword("")
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
           <h1>Login!</h1>
           <form className="login-page" >
                <label>Username: </label>
                <input type="text" onChange={handleUserChange} value={`${username}`} />
                <label>Password: </label>
                <input type="password" onChange={handlePasswordChange} value={`${password}`} />
                <button type="submit" onClick={handleSubmit}>Submit!</button>
           </form>
        </>
    )
}

export default Login