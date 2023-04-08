import './App.css';

import {Route, Routes} from "react-router-dom"
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { AllProduct } from './components/AllProduct';
import { AddProduct } from './components/AddProduct';

function App() {
  return (
    <div className="App">
        <h1>Ecommerce APP</h1>
        <Routes>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/' element={<Login/>} />
          <Route path="/all" element={<AllProduct />}/>
          <Route path="/add" element={<AddProduct/>}/>
        </Routes>
    </div>
  );
}

export default App;
