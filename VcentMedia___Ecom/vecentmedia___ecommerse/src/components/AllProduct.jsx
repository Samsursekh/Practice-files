import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const AllProduct = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setdata] = useState("");
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8000/products", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("BearToken")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
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
      <h1>Products :</h1>
      {loading && "Loading....."}
      {error && "something went wrong...."}
      {data &&
        data.length > 0 &&
        data.map((item) => {
          return (
            <div key={item._id}>
              <p>Name : {item.name}</p>
              <p>Description : {item.description}</p>
              <p>Price : {item.price}</p>
              <img style={{ width: "200px" }} src={item.image} alt={item._id} />
            </div>
          );
        })}
    </div>
  );
};

export { AllProduct };
