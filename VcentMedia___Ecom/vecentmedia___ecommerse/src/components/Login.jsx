import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   
    const handleSubmit = () => {
        const payload = {
            email,
            password
        }
       
        fetch("http://localhost:8000/login", {
            method : "POST",
            body : JSON.stringify(payload),
            headers : {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            localStorage.setItem("BearToken",res.token);
            alert("Login Successful ...!");
            navigate("/add")
        })
        .catch((err) =>{
            console.log(err);
            alert("Login Failed")
        })
    }
    return(
        <div>
            <h1>Login here</h1>
            <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}


export {Login}