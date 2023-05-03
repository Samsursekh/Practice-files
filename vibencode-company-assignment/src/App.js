// import { useState } from "react";
import User from "./Components/User";
import "./styles.css";

export default function App() {
  // const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      User Page
      <User />
      {/* {toggle && <User />}
      <button onClick={() => setToggle(!toggle)}>TOGGLE</button> */}
    </div>
  );
}
