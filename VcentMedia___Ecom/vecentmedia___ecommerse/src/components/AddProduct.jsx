import React from "react"
import { useState } from "react"


const AddProduct = () => {
    
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [type, setType] = useState("")



    const handleSubmit = () => {
        const payload = {
           name,
           type,
           description,
           price,
           image
        }

        console.log(payload);
       
        fetch("http://localhost:8000/products/create", {
            method : "POST",
            body : JSON.stringify(payload),
            headers : {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${localStorage.getItem("BearToken")}`
            }
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
    return(
        <div>
            <h1>Add Product </h1>
            <input type="text" placeholder="Enter Name Here" value={name} onChange={(e) => setName(e.target.value)}></input>
            <select name="" id="" value={type} onChange={(e) => setType(e.target.value)}>
                <option value="">Select Items</option>
                <option value="Shoes">Shoes</option>
                <option value="Stationery">Stationery</option>
            </select>
            <input type="text" placeholder="Enter Description Here" value={description} onChange={(e) => setDescription(e.target.value)}></input>
            <input type="number" placeholder="Enter Price Here" value={price} onChange={(e) => setPrice(e.target.value)}></input>
            <input type="url" placeholder="Enter Image Here" value={image} onChange={(e) => setImage(e.target.value)}></input>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}


export {AddProduct}