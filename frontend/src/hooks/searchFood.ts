import { useEffect, useState } from "react";
import axios from "axios";

export interface Food {
  id: number;
  name: string;
  description: string;
}

export const useSearchFood = (query: string) => {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const fetchFood = async () => {
        if (query.trim() === "") {
          setFoods([]);
          return;
        }

        try {
          const response = await axios.get<{ response: Food[] }>(
            `http://localhost:3000/f/getAllFood?search=${query}`
          );
          setFoods(response.data.response);
        } catch (err) {
          console.log(err);
        } 
      };

      fetchFood();
    }, 400); // Wait 400ms after user stops typing

    return () => clearTimeout(delayDebounce);
  }, [query]);

  return { foods };
};
