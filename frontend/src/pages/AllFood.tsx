import { useState } from "react";
import { useGetAllFoods } from "../hooks/getAllFoods";
import { useSearchFood } from "../hooks/searchFood";
import { SearchBarComponent } from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
import FoodGrid from "../components/FoodGrid";
import { type FoodCardProps } from "../components/FoodCard";

export const AllFood = () => {
  const [query, setQuery] = useState("");
  const { foods: allFoods } = useGetAllFoods();
  const { foods: searchedFoods } = useSearchFood(query);
  const navigate = useNavigate();

  const foodsToRender = query.trim() === "" ? allFoods : searchedFoods;

  const mappedItems: FoodCardProps[] = foodsToRender.map((food) => ({
    id: food.id,
    name: food.name,
    description: food.description,
    image: food.image,
  }));

  return (
    <div className="p-4">
      <SearchBarComponent query={query} setQuery={setQuery} />

      <FoodGrid
        items={mappedItems}
        onItemClick={(id) => navigate(`/food/${id}/restaurants`)}
      />
    </div>
  );
};
