import { useState } from "react";
import { useGetAllFoods } from "../hooks/getAllFoods";
import { useSearchFood } from "../hooks/searchFood";
import { SearchBarComponent } from "../components/SearchBar";
import { useNavigate } from "react-router-dom";

export const AllFood = () => {
  const [query, setQuery] = useState("");
  const { foods: allFoods } = useGetAllFoods();
  const { foods: searchedFoods } = useSearchFood(query);
  const navigate = useNavigate();
  const foodsToRender = query.trim() === "" ? allFoods : searchedFoods;

  return (
    <div className="p-4">
      <SearchBarComponent query={query} setQuery={setQuery} />
      
      <div className="grid grid-cols-2 gap-4">
        {foodsToRender.map((food) => (
          <div key={food.id} className="bg-white p-4 rounded shadow" onClick={()=>{
            navigate(`/food/${food.id}/restaurants`)
          }}>
            <h2 className="text-lg font-bold">{food.name}</h2>
            <p className="text-gray-600">{food.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
