import React, { useEffect, useState } from "react";
import "../styles.css";

const Product = () => {
  const [prod, setProd] = useState([]);
  const [sortCost, setSortCost] = useState("High To Low");

  const handleChange = (event) => {
    let selected = event.target.value;
    setSortCost(selected);
  };

  const sortedProd = prod.sort((a, b) => {
    if (sortCost === "High To Low") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });
  // console.log(sortedProd ,"Sorted Data");

  const fetchFunction = () => {
    fetch(`https://books-data-api.onrender.com/hotels`)
      .then((res) => {
        const data = res.json();
        data.then((result) => {
          console.log(result);
          setProd(result);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchFunction();
  }, []);
  return (
    <>
      <nav className="navbar">
        <select name="" id="" onChange={handleChange}>
          <option value="Price High To Low">Price High To Low</option>
          <option value=" High To Low"> High To Low</option>
          <option value=" Low To High">Low To High</option>
        </select>
      </nav>
      <div id="container">
        {sortedProd.map((item) => (
          <div key={item.id}>
            <img className="image" src={item.image_url} alt={item.id} />
            <h3>Category : {item.category}</h3>
            <h3> Bed Type : {item.bed_type}</h3>
            <h3>Room Type : {item.type_of_room}</h3>
            <h3>Total Cost : {item.cost}</h3>
          </div>
        ))}
      </div>
    </>
  );
};


export default Product;
