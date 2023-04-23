import { useState } from "react";
import TimerComp from "./Components/TimerCompo";
import "./styles.css";

export default function App() {
 const [toggle,setToggle] = useState(false);

  return (
    <div className="App">
      <h1>Hello Timer App</h1>
    {toggle && <TimerComp />} 
   <button onClick={()=> setToggle(!toggle)}>TOGGLE</button>
  
    </div>
  );
}
