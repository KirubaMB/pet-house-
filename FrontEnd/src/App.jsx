import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/register";
import Login from "./pages/Login";
import './index.css';

function App() {
  return (
      
  <>
  <BrowserRouter>
  <Routes>
   <Route index element={<Home/>}/>
   <Route path="/register" element={<Register/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="*" element={<PageNo/>}/>
  </Routes>
  </BrowserRouter>
  </>  

  );
}

export default App;
