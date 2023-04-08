import React from "react";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();


  const handleSubmit = () => {
    if (email !== "" || password !== "" || name !== "" || city !== "") {
      const payload = {
        email,
        password,
        name,
        city,
      };

      fetch("http://localhost:8000/signup", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          alert("Signup  Successfully");
          navigate("/login");
        })
        .catch((err) => console.log(err));
    } else {
      alert("Fill all the Field");
    }
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Sign up</h1>
      <TextField
        type="text"
        style={{ width: "260px", marginBottom: "1rem" }}
        required
        placeholder="Enter Email Here"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></TextField>
      <TextField
        type="password"
        style={{ width: "260px", marginBottom: "1rem" }}
        required
        placeholder="Enter Password Here"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></TextField>
      <TextField
        type="text"
        style={{ width: "260px", marginBottom: "1rem" }}
        required
        placeholder="Enter Name Here"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></TextField>
      <TextField
        type="text"
        style={{ width: "260px", marginBottom: "1rem" }}
        required
        placeholder="Enter City Here"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      ></TextField>

      <Button
        variant="contained"
        style={{ width: "260px" }}
        color="primary"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
};

export { Signup };
