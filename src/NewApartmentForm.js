import React, { useState } from "react"
import { useContext } from "react"
import { LoggedInContext } from "./UserContext"

function NewApartmentForm() {
    const prop = useContext(LoggedInContext)
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [image, setImage] = useState("")

    function handleName(e) {
        setName(e.target.value)
    }

    function handleAddress(e) {
        setAddress(e.target.value)
    }

    function handleImage(e) {
        setImage(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newData = {
            name: name,
            address : address,
            image : image
        }
        prop.setHomeData([...prop.homeData, newData])
        setName("")
        setAddress("")
        setImage("")
    }

    return (
        <div className="new-form-container">
            <h1 className="new-from-header">
                New Apartment
            </h1>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label>Apartment name: </label>
                    <input type="text" value={name} onChange={handleName}/>
                </div>
                <div>
                    <label>Apartment address: </label>
                    <input type="text" value={address} onChange={handleAddress}/>
                </div>
                <div>
                    <label>Photo URL: </label>
                    <input type="text" value={image} onChange={handleImage}/>
                </div>
                <div className="submit">
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    )
}

export default NewApartmentForm