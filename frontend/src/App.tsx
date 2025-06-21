import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { HomePage } from "./pages/HomePage";
import { GetRestaurant } from "./pages/GetRestaurants";
import { AllFood } from "./pages/AllFood";
import { RestaurantByFood } from "./pages/RestaurantsByFood";
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
     <Route path="/food/:id/restaurants" element={<RestaurantByFood />} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;