import { useParams } from "react-router-dom";
import { useFoodByRes } from "../hooks/useFoodByRestaurant";
import { RestaurantFoodCard } from "../components/RestaurantFoodCard";

export const FoodByRes=()=>{
    const {id}= useParams();
    const {food} = useFoodByRes(id!);

    return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Food Served by this restaurant</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {food.map((items) => (
          <div key={items.id} className="bg-white p-4 rounded shadow justify-items-center">
            <RestaurantFoodCard id={items.id} name={items.name} description={items.description} image={items.image} price={items.price}/> 
          </div>
        ))}
      </div>
    </div>
  );

}