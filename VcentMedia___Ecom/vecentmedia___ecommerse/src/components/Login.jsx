import React from "react";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const payload = {
      email,
      password,
    };

    fetch("https://dark-gold-eel-shoe.cyclic.app/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("BearToken", res.token);
        // alert("Login Successful ...!");
        navigate("/add");
      })
      .catch((err) => {
        console.log(err);
        alert("Login Failed")
      });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Login </h1>
      <TextField label="Email" value={email} style={{width : "260px", marginBottom: "1rem"}} onChange={(e) => setEmail(e.target.value)}  />
      <TextField label="Password" type="password" style={{width : "260px", marginBottom: "1rem"}} value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" style={{width : "260px"}} color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export { Login };
