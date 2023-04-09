import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Grid } from "@mui/material";
const AllProduct = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setdata] = useState("");
  useEffect(() => {
    setLoading(true);
    fetch("https://dark-gold-eel-shoe.cyclic.app/products", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("BearToken")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        // console.log(res.data);
        setdata(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div>
    
    {loading && "Loading....."}
    {error && "Please Signup First 😁"}
    {data &&
      data.length > 0 && (
        <Grid container spacing={3}>
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item._id}>
              <div style={{boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"}}>
                <h3>Name : {item.name}</h3>
                <h3>Category : {item.type}</h3>
                <p>Description : {item.description}</p>
                <h3>Price : {item.price}</h3>
                <img
                  style={{ width: "100%", height: "auto" }}
                  src={item.image}
                  alt={item._id}
                />
              </div>
            </Grid>
          ))}
        </Grid>
      )}
  </div>
  );
};

export { AllProduct };
