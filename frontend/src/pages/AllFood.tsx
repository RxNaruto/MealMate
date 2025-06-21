import { useState } from "react";
import { useGetAllFoods } from "../hooks/getAllFoods";
import { useSearchFood } from "../hooks/searchFood";
import { SearchBarComponent } from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
import { FoodCard } from "../components/FoodCard";

export const AllFood = () => {
  const [query, setQuery] = useState("");
  const { foods: allFoods } = useGetAllFoods();
  const { foods: searchedFoods } = useSearchFood(query);
  const navigate = useNavigate();
  const foodsToRender = query.trim() === "" ? allFoods : searchedFoods;

  return (
    <div className="p-4">
      <SearchBarComponent query={query} setQuery={setQuery} />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {foodsToRender.map((food) => (
          <div key={food.id} className="bg-white p-4 rounded shadow justify-items-center" onClick={()=>{
            navigate(`/food/${food.id}/restaurants`)
          }}>
            <FoodCard id={food.id} name={food.name} description={food.description} />
            
          </div>
        ))}
      </div>
    </div>
  );
};
