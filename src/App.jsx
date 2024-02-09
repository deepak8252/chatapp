import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"

function App() {
 
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/" element={<Register/>}/>
    <Route path="/home" element={<Home/>}/>
  </Routes>
  </BrowserRouter>

  </>
  )
}

export default App
