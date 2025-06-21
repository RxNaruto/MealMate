import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { HomePage } from "./pages/HomePage";
import { GetRestaurant } from "./pages/GetRestaurants";
import { AllFood } from "./pages/AllFood";
function App(){
  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/home" element={<HomePage />} />
     <Route path="/res" element={<GetRestaurant />}/>
     <Route path="/food" element={<AllFood />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;