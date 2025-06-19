import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { GetAllFood } from "./pages/GetAllFood";
import { HomePage } from "./pages/HomePage";
function App(){
  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/getAllFood" element={<GetAllFood/>}/>
     <Route path="/home" element={<HomePage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;