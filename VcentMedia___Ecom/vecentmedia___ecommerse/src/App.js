import "./App.css";

import { Route, Routes } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { AllProduct } from "./components/AllProduct";
import { AddProduct } from "./components/AddProduct";
import { Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Typography variant="h4">
        Ecommerce APP
      </Typography>
      ;
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/all" element={<AllProduct />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
