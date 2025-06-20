import axios from "axios";
import { useEffect, useState } from "react"

interface Food{
    id: number;
    name: string;
    description: string;
}
export const useGetAllFoods=()=>{
    const[foods,setFoods]=useState<Food[]>([]);

    useEffect(()=>{
        const fetchFood=async()=>{
            try {
                const response = await axios.get<{foods: Food[]}>(
                    "http://localhost:3000/f/getAllFood");
                setFoods(response.data.foods);
            } catch (e) {
                console.log(e);
            }

        };
        fetchFood();
    },[]);

    return {foods};
}