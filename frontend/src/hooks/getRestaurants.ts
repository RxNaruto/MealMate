import axios from "axios";
import { useEffect, useState } from "react"
//allRestaurants

interface RestaurantProp{

    id: number;
    name: string;
    address: string;
    ownerName: string;
    contact: string;

}
export const useGetRestaurants=()=>{
    const[restaurant,setRestaurants]=useState<RestaurantProp[]>([]);
    
    useEffect(()=>{
        const fetchRestaurant = async()=>{
       try {
             const response = await axios.get<{restaurants: RestaurantProp[]}>(
                 "http://localhost:3000/f/allRestaurants"
             );
             setRestaurants(response.data.restaurants);
            }
        catch (e) {
        console.log(e);
          } 
        };
        fetchRestaurant();
    },[]);

    return {restaurant};
}