import axios from "axios";
import { useEffect, useState } from "react"

interface RestaurantProp{

    restaurantId: number;
    name: string;
    price: number;
}
export const useResByFood=(foodId: string)=>{
    const[restaurant,setRestaurants]=useState<RestaurantProp[]>([]);

    useEffect(()=>{
        const fetchRestaurant=async()=>{
            try {
                const response = await axios.get(`http://localhost:3000/f/${Number(foodId)}/restaurant`);
                setRestaurants(response.data);
            } catch (e) {
                console.log(e);
                
            }
        };
        fetchRestaurant();
    },[foodId]);
    return {restaurant};
}