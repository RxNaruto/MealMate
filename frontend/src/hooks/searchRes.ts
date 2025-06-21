import axios from "axios";
import { useEffect, useState } from "react"

interface RestaurantProp{
    id: number;
    name: string;
    address: string,
    ownerName: string,
    contact: string
}


export const useSearchRes=(query:string)=>{
    const [restaurant,setRest]= useState<RestaurantProp[]>([])
    
    useEffect(()=>{
      const delayDebounce = setTimeout(()=>{
        const fetchFood=async()=>{
          if(query.trim()===""){
            setRest([]);
            return;
          }

          try {
            const response = await axios.get(`http://localhost:3000/f/allRestaurants?search=${query}`);
            setRest(response.data.restaurants);
          } catch (e) {
            console.log(e);
          }
        };
        fetchFood();
      },400);
      return ()=>clearTimeout(delayDebounce);
    },[query]);

    return {restaurant};


}