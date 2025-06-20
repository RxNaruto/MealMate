import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { HomePage } from "./pages/HomePage";
import { GetAllFoods } from "./pages/GetAllFood";
import { Searchbar } from "./components/SearchBar";
import { GetRestaurant } from "./pages/GetRestaurants";
function App(){
  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/home" element={<HomePage />} />
     <Route path="/getAllFood" element={<GetAllFoods />}/>
     <Route path="/search" element={<Searchbar />}/>
     <Route path="/getRes" element={<GetRestaurant />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;