import { TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      name !== "" ||
      type !== "" ||
      description !== "" ||
      price !== "" ||
      image !== ""
    ) {
      const payload = {
        name,
        type,
        description,
        price,
        image,
      };

      console.log(payload);

      fetch("https://dark-gold-eel-shoe.cyclic.app/products/create", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("BearToken")}`,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          alert("Product added Successfully");
          navigate("/all");
        })
        .catch((err) => {
          console.log(err);
          alert("Some thing went wrong");
        });
    } else {
      alert("All the fields Should be Filled");
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Add Product </h1>
        <TextField
          type="text"
          style={{ width: "300px", marginBottom: "1rem" }}
          placeholder="Enter Name Here"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></TextField>
        <select
          name=""
          style={{ width: "300px", height: "40px", marginBottom: "1rem" }}
          id=""
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        >
          <option value="">Select Items</option>
          <option value="Shoes">Shoes</option>
          <option value="Stationery">Stationery</option>
        </select>
        <TextField
          type="text"
          style={{ width: "300px", marginBottom: "1rem" }}
          placeholder="Enter Description Here"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></TextField>
        <TextField
          type="number"
          style={{ width: "300px", marginBottom: "1rem" }}
          placeholder="Enter Price Here"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        ></TextField>
        <TextField
          type="url"
          style={{ width: "300px", marginBottom: "1rem" }}
          placeholder="Enter Image Here"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        ></TextField>

        <input
          style={{
            width: "300px",
            height: "2.5rem",
            fontWeight: "700",
            fontSize: "20px",
            color: "white",
            backgroundColor: "#1565c0",
            border: 0,
          }}
          type="submit"
          value="Submit"
        ></input>
      </form>
    </>
  );
};

export { AddProduct };
