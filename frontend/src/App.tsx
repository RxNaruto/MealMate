import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { HomePage } from "./pages/HomePage";
import { AllRestaurant } from "./pages/AllRestaurant";
import { AllFood } from "./pages/AllFood";
import { RestaurantByFood } from "./pages/RestaurantsByFood";
import { FoodByRes } from "./pages/FoodByRestaurant";
import { CartPage } from "./pages/Cartpage";
import { GetResTest } from "./pages/GetResTest";
import { AllFoodTest } from "./pages/TestAllFood";
function App(){
  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/home" element={<HomePage />} />
     <Route path="/res" element={<AllRestaurant />}/>
     <Route path="/food" element={<AllFood />} />
     <Route path="/food/:id/restaurants" element={<RestaurantByFood />} />
     <Route path="/res/:id/food" element={<FoodByRes />} />
     <Route path="/cart" element={<CartPage />}/>
     <Route path="/res/:id/test" element={<GetResTest />} />
     <Route path="/allF" element={<AllFoodTest />} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;