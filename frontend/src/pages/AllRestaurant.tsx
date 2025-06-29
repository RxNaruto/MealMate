import { useState } from "react";
import { useGetRestaurants } from "../hooks/getRestaurants";
import { useSearchRes } from "../hooks/searchRes";
import { SearchBarComponent } from "../components/SearchBar";
import RestaurantCard from "../components/RestaurantCard";
import { useNavigate } from "react-router-dom";

export const AllRestaurant = () => {
  const [query, setQuery] = useState("");
  const { restaurant: searchedRest } = useSearchRes(query);
  const { restaurant: allRest } = useGetRestaurants();
  const navigate = useNavigate();

  const restToRender = query.trim() === "" ? allRest : searchedRest;

  return (
    <div className="p-4">
      <SearchBarComponent query={query} setQuery={setQuery} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {restToRender.map((ri) => (
          <div
            key={ri.id}
            onClick={() => navigate(`/res/${ri.id}/food`)}
            className="cursor-pointer"
          >
            <RestaurantCard
              id={ri.id}
              name={ri.name}
              address={ri.address}
              contact={ri.contact}
              image={ri.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
