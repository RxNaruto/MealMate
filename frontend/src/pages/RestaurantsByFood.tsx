import { useParams } from "react-router-dom";
import { useResByFood } from "../hooks/useResByFood"

export const RestaurantByFood=()=>{
    const {id}= useParams();
    const {restaurant} = useResByFood(id!);

    return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Restaurants Serving This Food</h1>
      <div className="grid grid-cols-2 gap-4">
        {restaurant.map((rest) => (
          <div key={rest.restaurantId} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold">{rest.name}</h2>
            <p className="text-gray-600">Price: ₹{rest.price}</p>
          </div>
        ))}
      </div>
    </div>
  );

}