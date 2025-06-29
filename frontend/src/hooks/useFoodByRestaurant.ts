import axios from "axios";
import { useEffect, useState } from "react";

interface FoodProp {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const useFoodByRes = (resId: string) => {
  const [food, setFood] = useState<FoodProp[]>([]);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/f/${Number(resId)}/food`);
        setFood(response.data); 
      } catch (e) {
        console.log(e);
      }
    };

    if (resId) {
      fetchFood();
    }
  }, [resId]);

  return { food };
};
